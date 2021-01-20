/** This file will be overwritten by Plasmic. Don't edit. */
import React from "react";
import {ComponentItem} from "./ComponentGallery";
import Homepage from "./components/Homepage";
import HomepageHeader from "./components/HomepageHeader";
import ListItem from "./components/ListItem";
import Footer from "./components/Footer";
import PostPage from "./components/PostPage";
import PostHeader from "./components/PostHeader";
import AuthorBio from "./components/AuthorBio";
import Logo from "./components/Logo";

export const components: Array<ComponentItem> = [
  {Component: Homepage, meta: {"id":"S8CHoXOOoe3nD","name":"Homepage","params":[]}},
  {Component: HomepageHeader, meta: {"id":"m9Uc6w-6ucLSb","name":"Homepage Header","params":[{"name":"title","type":"string"},{"name":"children","type":"string"}]}},
  {Component: ListItem, meta: {"id":"9Zio7Q8zBtQbT","name":"List Item","params":[{"name":"title","type":"string"},{"name":"description","type":"string"},{"name":"date","type":"string"}]}},
  {Component: Footer, meta: {"id":"qoXkvURRJnibL","name":"Footer","params":[]}},
  {Component: PostPage, meta: {"id":"cnZ1rP7Ndm4o2","name":"Post Page","params":[{"name":"contents","type":"string"}]}},
  {Component: PostHeader, meta: {"id":"er1DyUSXNhrfZ","name":"Post Header","params":[{"name":"postTitle","type":"string"},{"name":"date","type":"string"},{"name":"blogTitle","type":"string"}]}},
  {Component: AuthorBio, meta: {"id":"eYEub_LSfttWC","name":"Author Bio","params":[{"name":"profilepic","type":"string"},{"name":"description","type":"string"}]}},
  {Component: Logo, meta: {"id":"88_wHRZTOo","name":"Logo","params":[]}}
];