package com.PersonalProject.PersonalProject.Contactme;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class contactMeController {

    @GetMapping("/contactme")
    public String contactMe() {
        return "contactme";
    }
}
