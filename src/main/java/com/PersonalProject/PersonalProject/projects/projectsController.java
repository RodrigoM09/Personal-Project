package com.PersonalProject.PersonalProject.projects;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class projectsController {

    @GetMapping("/projects")
    public String projects() {
        return "/projects";
    }
}
