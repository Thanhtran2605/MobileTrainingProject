package com.crud.springproject.test;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EntityScan(basePackages = {"com.crud.springproject.model"})
@ComponentScan(basePackages = {
		"com.crud.springproject.controller",
		"com.crud.springproject.service",
		"com.crud.springproject.model",
		"com.crud.springproject.repository",
		"com.crud.springproject.config",
		"com.crud.springproject.mapper",
		"com.crud.springproject.dto"
})
@EnableJpaRepositories(basePackages = "com.crud.springproject.repository")

public class SpringprojectApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringprojectApplication.class, args);
	}

}
