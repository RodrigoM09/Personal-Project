package com.PersonalProject.PersonalProject.images;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class imagesController {

    @GetMapping("/images")
    public String images() {
        return "/images";
    }
}
