package com.crud.springproject.mapper;

import com.crud.springproject.dto.FcmTokenRequest;
import com.crud.springproject.dto.FcmTokenResponse;
import com.crud.springproject.model.FcmToken;
import org.mapstruct.BeanMapping;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;
import org.mapstruct.NullValuePropertyMappingStrategy;

@Mapper(componentModel = "spring")
public interface FcmTokenMapper {
    FcmToken toEntity(FcmTokenRequest request);

    FcmTokenResponse toDto(FcmToken entity);

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    void updateEntityFromRequest(FcmTokenRequest request, @MappingTarget FcmToken entity);
}
