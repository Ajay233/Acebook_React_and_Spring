package com.makersacademy.acebook.testData;

import com.makersacademy.acebook.model.Post;
import com.makersacademy.acebook.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

    private final PostRepository repository;

    @Autowired
    public DatabaseLoader(PostRepository repository){
        this.repository = repository;
    }

    @Override
    public void run(String... strings) throws Exception {

        //This will add the posts below to the posts table.  This is run each time the app is started so only
        //uncomment to populate the db when necessary

//        this.repository.save(new Post("Some test content here", "Test title"));
//        this.repository.save(new Post("Hello world the posts are connected to a db", "Clean connection"));
//        this.repository.save(new Post("A little bit more info to make sure", "Safe sde"));
//        this.repository.save(new Post("A bot more info never hurts", "Last but not least"));
    }

}
