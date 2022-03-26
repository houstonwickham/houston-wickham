import Head from 'next/head';
import Project from '../components/projects/Project';
import Contact from './Contact';
import Projects from './Projects';
import Home from './Home';

export default function index() {
  return (
    <>
      <Head>
        <title>Houston Wickham</title>
        <meta charset='utf-8' />
        <meta
          name='description'
          content='Home Page for Houston Wickham - Front End Developer'
        />
        <meta name='author' content='Houston Wickham' />
        <meta name='keywords' content='Houston Wickham' />

        <meta property='og:title' content='Houston Wickham' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://houstonwickham.com/' />
        <meta
          property='og:image'
          content='https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        />

        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Home />
      <Projects />
      <Contact />
    </>
  );
}
