package com.PersonalProject.PersonalProject.Resume;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class resumeController {

    @GetMapping("/resume")
    public String resume() {
        return "/resume";
    }
}
