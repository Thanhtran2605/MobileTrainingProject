package com.crud.springproject.dto;

import lombok.Data;

import java.util.Map;

@Data
public class SendNotificationRequest {
    private String toToken;
    private String userId;
    private String title;
    private String body;
    private Map<String, String> data;
}
