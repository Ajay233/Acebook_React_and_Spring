package com.makersacademy.acebook.controller;

import com.makersacademy.acebook.model.Post;
import com.makersacademy.acebook.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class HomeController {

    @Autowired
    private PostRepository postRepository;

	@RequestMapping(value = "/")
	public String index() {
		return "index";
	}

	@RequestMapping(value = "createPost", method = RequestMethod.POST)
    public String createPost(@RequestParam("title") String title,
                             @RequestParam("content") String content){
        Post post = new Post(title, content);
	    postRepository.save(post);
	    return "redirect: index";
    }

}
