package com.typesprint.typesprint.exceptions;

public class ApiException extends RuntimeException{
	
	public ApiException(String message) {
		super(message);
	}
	public ApiException() {
		super();
	}
}
