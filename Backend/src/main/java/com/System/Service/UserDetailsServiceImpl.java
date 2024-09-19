package com.System.Service;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.System.Entities.User;
import com.System.Exceptions.RecordNotFoundException;
import com.System.Repository.UserRepository;



@Service
public class UserDetailsServiceImpl implements UserDetailsService {

	
	@Autowired
	private UserRepository  userRepo;
	
	@Override
	public UserDetails loadUserByUsername(String gmail) throws UsernameNotFoundException {
		System.out.println("load"+gmail);
		User user= userRepo.findByuseremail(gmail);
		if(user==null)
			throw new RecordNotFoundException("User not found");
		return user;			

	}

}
