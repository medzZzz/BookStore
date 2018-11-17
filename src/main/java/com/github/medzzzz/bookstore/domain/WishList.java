package com.github.medzzzz.bookstore.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.time.ZonedDateTime;
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
    @Column(name = "DateOfCreate", nullable = false)
    private ZonedDateTime dateOfCreate;

    @ManyToOne(optional = false)
    @NotNull
    private User user;

    @ManyToOne(optional = false)
    @NotNull
    private Book book;

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

    public User getUser() {
        return user;
    }

    public WishList user(User user) {
        this.user = user;
        return this;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Book getBook() {
        return book;
    }

    public WishList book(Book book) {
        this.book = book;
        return this;
    }

    public void setBook(Book book) {
        this.book = book;
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
