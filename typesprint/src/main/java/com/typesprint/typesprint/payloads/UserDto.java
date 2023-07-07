package com.typesprint.typesprint.payloads;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.HashSet;
import java.util.Set;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class UserDto {

  private int id;

  @NotEmpty
  @Size(min = 4, message = "Username must be min of 4 characters !!")
  private String name;

  @Email(message = "Email address is not valid !!")
  @NotEmpty(message = "Email is required !!")
  private String email;

  @Size(min = 10, message = "number must be 10 characters long")
  private int number;

  @NotEmpty
  @Size(
    min = 3,
    max = 10,
    message = "Password must be min of 3 chars and max of 10 chars !!"
  )
  private String password;

  private Set<RoleDto> roles = new HashSet<>();

  @JsonIgnore
  public String getPassword() {
    return this.password;
  }

  @JsonProperty
  public void setPassword(String password) {
    this.password = password;
  }
}
