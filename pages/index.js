import Head from "next/head";
import Image from "next/image";
import { TodoList } from "../components/TodoList";
import styles from "../styles/Home.module.css";

export default function Home() {
  return <TodoList />;
}
