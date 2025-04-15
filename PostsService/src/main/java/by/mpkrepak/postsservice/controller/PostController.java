package by.mpkrepak.postsservice.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PostController {
    @GetMapping
    public String post() {
        return "Hello World";
    }
}
