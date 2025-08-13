package com.crud.springproject.dto;

import lombok.Data;

@Data
public class FcmTokenRequest {
    private String userId;
    private String token;
    private String deviceInfo;
}
