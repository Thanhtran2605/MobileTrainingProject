package com.crud.springproject.service;

import com.google.firebase.messaging.*;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class FirebaseMessagingService {

    public String sendToToken(String token, String title, String body, Map<String, String> data) throws Exception {
        Message.Builder mb = Message.builder()
                .setToken(token)
                .setNotification(Notification.builder().setTitle(title).setBody(body).build());

        if (data != null && !data.isEmpty()) mb.putAllData(data);

        return FirebaseMessaging.getInstance().send(mb.build());
    }

    public List<String> sendToTokens(List<String> tokens, String title, String body, Map<String, String> data) throws Exception {
        List<Message> messages = tokens.stream().map(t ->
                Message.builder()
                        .setToken(t)
                        .setNotification(Notification.builder().setTitle(title).setBody(body).build())
                        .putAllData(data == null ? Collections.emptyMap() : data)
                        .build()
        ).collect(Collectors.toList());

        BatchResponse resp = FirebaseMessaging.getInstance().sendAll(messages);
        return resp.getResponses().stream()
                .filter(SendResponse::isSuccessful)
                .map(SendResponse::getMessageId)
                .collect(Collectors.toList());
    }
}
