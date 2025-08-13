package com.crud.springproject.service;


import com.crud.springproject.dto.FcmTokenRequest;
import com.crud.springproject.dto.FcmTokenResponse;
import com.crud.springproject.mapper.FcmTokenMapper;
import com.crud.springproject.model.FcmToken;
import com.crud.springproject.repository.FcmRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class FcmTokenService {

    private final FcmRepository repository;
    private final FcmTokenMapper mapper;

    @Transactional
    public FcmTokenResponse saveOrUpdate(FcmTokenRequest request) {
        FcmToken entity = repository.findByToken(request.getToken())
                .map(existing -> {
                    mapper.updateEntityFromRequest(request, existing);
                    return existing;
                })
                .orElseGet(() -> mapper.toEntity(request));

        return mapper.toDto(repository.save(entity));
    }
}