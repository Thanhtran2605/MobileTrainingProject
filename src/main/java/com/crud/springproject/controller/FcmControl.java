package com.crud.springproject.controller;

import com.crud.springproject.dto.FcmTokenRequest;
import com.crud.springproject.dto.FcmTokenResponse;
import com.crud.springproject.dto.SendNotificationRequest;
import com.crud.springproject.model.FcmToken;
import com.crud.springproject.repository.FcmRepository;
import com.crud.springproject.service.FcmTokenService;
import com.crud.springproject.service.FirebaseMessagingService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/fcm")
@RequiredArgsConstructor
public class FcmControl {
    private final FcmTokenService tokenService;
    private final FcmRepository tokenRepository;
    private final FirebaseMessagingService fcmService;

    @Value("${app.api-key}")
    private String apiKey;

    @PostMapping("/token")
    public ResponseEntity<FcmTokenResponse> saveToken(@RequestBody FcmTokenRequest request) {
        return ResponseEntity.ok(tokenService.saveOrUpdate(request));
    }

    @PostMapping("/send")
    public ResponseEntity<?> sendNotification(@RequestHeader("x-api-key") String key,
                                              @RequestBody SendNotificationRequest request) throws Exception {
        if (!apiKey.equals(key)) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Invalid API Key");
        }

        if (request.getToToken() != null) {
            return ResponseEntity.ok(fcmService.sendToToken(request.getToToken(),
                    request.getTitle(), request.getBody(), request.getData()));
        } else if (request.getUserId() != null) {
            List<String> tokens = tokenRepository.findByUserId(request.getUserId())
                    .stream().map(FcmToken::getToken).collect(Collectors.toList());
            return ResponseEntity.ok(fcmService.sendToTokens(tokens,
                    request.getTitle(), request.getBody(), request.getData()));
        } else {
            return ResponseEntity.badRequest().body("toToken or userId required");
        }
    }
}
