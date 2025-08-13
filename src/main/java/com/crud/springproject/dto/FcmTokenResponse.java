package com.crud.springproject.dto;

import lombok.Data;

import java.time.Instant;

@Data
public class FcmTokenResponse {
    private Long id;
    private String userId;
    private String token;
    private String deviceInfo;
    private Instant createdAt;
    private Instant updatedAt;
}