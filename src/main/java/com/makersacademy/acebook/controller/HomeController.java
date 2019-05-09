package com.makersacademy.acebook.controller;

import com.makersacademy.acebook.model.Post;
import com.makersacademy.acebook.model.Session;
import com.makersacademy.acebook.model.User;
import com.makersacademy.acebook.repository.PostRepository;
import com.makersacademy.acebook.repository.SessionRepository;
import com.makersacademy.acebook.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.security.Principal;

@Controller
public class HomeController {

    @Autowired
    private final PostRepository postRepository;
    private final UserRepository userRepository;
    private final SessionRepository sessionRepository;

    @Autowired
	public HomeController(PostRepository postRepository, UserRepository userRepository, SessionRepository sessionRepository){
    	this.postRepository = postRepository;
    	this.userRepository = userRepository;
    	this.sessionRepository = sessionRepository;
	}

	@RequestMapping(value = "/")
	public String index(Principal principal) {
		User user = userRepository.findByEmail(principal.getName());
		Session session = new Session((int) user.getId(), user.getForename(), user.getSurname(), user.getDay(),
										user.getMonth(), user.getYear(), user.getEmail(), user.getMobile());
		sessionRepository.save(session);
		return "index";
	}

	@RequestMapping(value = "/username", method = RequestMethod.GET)
	@ResponseBody
	public String currentUserName(Principal principal){
		return principal.getName();
	}

	@RequestMapping(value = "/login")
	public String login(){
		return "login";
	}

	@RequestMapping(value = "/logout-success")
	public String logout(){
    	sessionRepository.deleteAll();
		return "logout";
	}

	@RequestMapping(value = "api/createPost", method = RequestMethod.POST)
    public String createPost(@RequestParam("title") String title,
                             @RequestParam("content") String content){
        Post post = new Post(title, content);
	    postRepository.save(post);
	    return "redirect: index";
    }

}
