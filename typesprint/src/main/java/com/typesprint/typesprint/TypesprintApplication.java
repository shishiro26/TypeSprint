package com.typesprint.typesprint;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.typesprint.typesprint")
public class TypesprintApplication {

  public static void main(String[] args) {
    SpringApplication.run(TypesprintApplication.class, args);
  }
}
