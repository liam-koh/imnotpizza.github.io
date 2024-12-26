import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <section className='container flex-center'>
      <div className='about__profile'>Profile</div>
      <div className='about'>
        {name && (
          <h1>
            안녕하세요{' '}
            <span className='about__name'>어쩌구저쩌구어쩌구저쩌구</span>
          </h1>
        )}

        {role && <h2 className='about__role'>A {role}.</h2>}
        <p className='about__desc'>{description && description}</p>
      </div>
      {/* 이메일, github 주소 등등 가가 */}
    </section>
  )
}

export default About
