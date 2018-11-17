package com.github.medzzzz.bookstore.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.time.ZonedDateTime;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A WishList.
 */
@Entity
@Table(name = "t_WishList")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class WishList implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "DateofCreate", nullable = false)
    private ZonedDateTime dateOfCreate;

    @OneToMany(mappedBy = "wishList")
    @JsonIgnore
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<User> users = new HashSet<>();

    @OneToMany(mappedBy = "wishList")
    @JsonIgnore
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Book> books = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public ZonedDateTime getDateOfCreate() {
        return dateOfCreate;
    }

    public WishList dateOfCreate(ZonedDateTime dateOfCreate) {
        this.dateOfCreate = dateOfCreate;
        return this;
    }

    public void setDateOfCreate(ZonedDateTime dateOfCreate) {
        this.dateOfCreate = dateOfCreate;
    }

    public Set<User> getUsers() {
        return users;
    }

    public WishList users(Set<User> users) {
        this.users = users;
        return this;
    }

    public WishList addUser(User user) {
        this.users.add(user);
        user.setWishList(this);
        return this;
    }

    public WishList removeUser(User user) {
        this.users.remove(user);
        user.setWishList(null);
        return this;
    }

    public void setUsers(Set<User> users) {
        this.users = users;
    }

    public Set<Book> getBooks() {
        return books;
    }

    public WishList books(Set<Book> books) {
        this.books = books;
        return this;
    }

    public WishList addBook(Book book) {
        this.books.add(book);
        book.setWishList(this);
        return this;
    }

    public WishList removeBook(Book book) {
        this.books.remove(book);
        book.setWishList(null);
        return this;
    }

    public void setBooks(Set<Book> books) {
        this.books = books;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        WishList wishList = (WishList) o;
        if (wishList.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), wishList.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "WishList{" +
            "id=" + getId() +
            ", dateOfCreate='" + getDateOfCreate() + "'" +
            "}";
    }
}
