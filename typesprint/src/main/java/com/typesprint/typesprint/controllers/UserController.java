package com.typesprint.typesprint.controllers;

import com.typesprint.typesprint.payloads.UserDto;
import com.typesprint.typesprint.services.UserService;
import com.typesprint.typesprint.payloads.ApiResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/v1/users")
public class UserController {

    @Autowired
    private UserService userService;

    // POST - create user
    @PostMapping("/")
    public ResponseEntity<UserDto> createUser(@Valid @RequestBody UserDto userDto) {
        UserDto createUserDto = this.userService.createUser(userDto);
        return new ResponseEntity<>(createUserDto, HttpStatus.CREATED);
    }

    // PUT - update user
    @PutMapping("/{userId}")
    public ResponseEntity<UserDto> updateUser(
            @Valid @RequestBody UserDto userDto,
            @PathVariable("userId") Integer userId
    ) {
        UserDto updatedUser = this.userService.updateUser(userDto, userId);
        return ResponseEntity.ok(updatedUser);
    }

    // ADMIN
    // DELETE - delete user
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/{userId}")
    public ResponseEntity<ApiResponse> deleteUser(@PathVariable("userId") Integer userId) {
        this.userService.deleteUser(userId);
        return new ResponseEntity<>(new ApiResponse("User deleted successfully", true), HttpStatus.OK);
    }

    // GET - get all users
    @GetMapping("/")
    public ResponseEntity<List<UserDto>> getAllUsers() {
        List<UserDto> users = this.userService.getAllUsers();
        return ResponseEntity.ok(users);
    }

    // GET - get single user
    @GetMapping("/{userId}")
    public ResponseEntity<UserDto> getSingleUser(@PathVariable("userId") Integer userId) {
        UserDto user = this.userService.getUserById(userId);
        return ResponseEntity.ok(user);
    }
}
