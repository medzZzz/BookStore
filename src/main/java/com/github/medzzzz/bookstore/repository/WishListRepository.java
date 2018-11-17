package com.github.medzzzz.bookstore.repository;

import com.github.medzzzz.bookstore.domain.WishList;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;
import java.util.List;

/**
 * Spring Data JPA repository for the WishList entity.
 */
@SuppressWarnings("unused")
@Repository
public interface WishListRepository extends JpaRepository<WishList, Long> {

    @Query("select t_WishList from WishList t_WishList where t_WishList.user.login = ?#{principal.username}")
    List<WishList> findByUserIsCurrentUser();

}
