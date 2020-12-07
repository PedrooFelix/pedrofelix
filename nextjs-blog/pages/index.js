import Head from 'next/head'

export default function Home() {
  return (
   
    <div className="container">
      <Head>
        <title>Pedro</title>
        <link rel="icon" href="This is Pedro F..png" />
      </Head>
      <main>
      <img
              src="This is Pedro F..png"
            />

        
        <h1 className="title">
          Know me better at <a href="https://medium.com/@pedropaulofelix">Medium</a>
        </h1>
      
        <p className="description">
          Find me in these <code>links ↧</code>
        </p>

        <div className="grid">
          <a href="https://prezi.com/view/CGJFADaUnFIkjl2AbT4N/" className="card">
            <h3>Mentorship &rarr;</h3>
            <p>Maximize your results with digital marketing.</p>
          </a>
          

          <a href="https://www.linkedin.com/in/pedro-paulo-felix/" className="card">
            <h3>Linkedin &rarr;</h3>
            <p>About my connections and projects.</p>
          </a>

          <a
            href="https://github.com/PedrooFelix"
            className="card"
          >
            <h3>Portfolio &rarr;</h3>
            <p>Where You can find all my projects in GitHub</p>
          </a>

          <a
            href="https://www.instagram.com/xpedrofelix/"
            className="card"
          >
            <h3>Instagram &rarr;</h3>
            <p>
            In my world, everything is perfectly imperfect.
            </p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://www.instagram.com/xpedrofelix/"
          target="_blank"
          rel="noopener noreferrer"
        >
          
          Get in touch
          <img src="/instagram.svg" alt="Instagram Logo" className="logo" />
          
        </a>
        <a
          href="https://www.linkedin.com/in/pedro-paulo-felix/"
          target="_blank"
          rel="noopener noreferrer"
        >
         
          <img src="/linkedin.svg" alt="Linkedin Logo" className="logo" />
          
        </a>
        <a
          href="https://medium.com/@pedropaulofelix"
          target="_blank"
          rel="noopener noreferrer"
        >
         
          <img src="/medio.svg" alt="Medium Logo" className="logo" />
          
        </a>
        <a
          href="https://www.facebook.com/pedroliveirafelix/"
          target="_blank"
          rel="noopener noreferrer"
        >
         
          <img src="/facebook.svg" alt="Facebook Logo" className="logo" />
          
        </a>
        
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        img{
          height: 24em;
        }
        

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
