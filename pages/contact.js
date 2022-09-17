import styles from '../styles/Home.module.css'
import Layout from "../components/Layout"
export default function contact () {
    return <>
    <Layout title="Contact">
    <div className={styles.divider}>
      <h1>Social Media</h1>
    </div>
    <div className={styles.divider}>
      <h1>Contact Me</h1>
    </div>
    <div className='contact form'>
        <form method='POST' action="https://getform.io/f/86537289-4693-4bb5-b5fa-ef02736c1a18">
            <input type='text' name='name' placeholder='Name'></input>
            <input type='text' name='email' placeholder='Email'></input>
            <input type='text' name='subject' placeholder='Subject'></input>
            <textarea type='message' name='message' placeholder='Message'></textarea>
            <button type='send'>Send</button>
            <button type='reset'>Send</button>
        </form>
    </div>
    </Layout>
    </>
}