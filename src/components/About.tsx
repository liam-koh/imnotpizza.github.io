import AnimatedSection from './AnimatedSection';
import { Card, CardContent } from '@/components/ui/card';

export default function About() {
  const achievements = [
    {
      percentage: '30%',
      title: '퍼포먼스 향상',
      description:
        '레거시 코드 개선 및 테스트 추가로 코드 수 18% 감소, 핵심 로직 커버리지 100% 달성',
    },
    {
      percentage: '80%',
      title: 'API 호출 최적화',
      description:
        'Next.js Server Cache, React-Query 등 API 캐싱으로 중복 API 호출 수 대폭 감소',
    },
    {
      percentage: '80%',
      title: '개발 효율성 증대',
      description:
        'Chat GPT, V0 등 각종 AI 툴 활용하여 단순작업 소요시간 대폭 단축',
    },
    {
      percentage: '80%',
      title: '배포시간 단축',
      description:
        '기존 인프라 배포환경 개선하여 Node 호환성 이슈 해결 (5분 → 1분)',
    },
  ];

  const techSkills = [
    {
      title: 'Javascript, Typescript 주력 언어로 개발 경험 5년 이상',
      description: '',
    },
    {
      title:
        'React.js, Vue.js, Next.js 모던 라이브러리/프레임워크 기반 개발 경험 및 SSR 기반 서비스의 개발 및 최적화 경험',
      description: '',
    },
    {
      title:
        'Webpack, Vite, Rollup 활용한 번들러 커스터마이징을 통한 배포 및 최적화 경험',
      description: '',
    },
    {
      title:
        'EC2, Linux, Nginx, Docker, Github Actions 등 사용한 배포 세팅 및 CI/CD 구축 경험',
      description: '',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
        </AnimatedSection>

        <div className="flex flex-col lg:flex-row justify-center items-start gap-12 lg:gap-16">
          {/* Content */}
          <AnimatedSection
            animation="fade-left"
            delay={400}
            className="lg:w-2/3"
          >
            <div className="space-y-8">
              {/* Main Description */}
              <div className="space-y-2 text-gray-700 text-3xl font-bold">
                <p>반복적이고 불필요한 작업을 최소화하는 대신,</p>
                <p>서비스에 진정으로 필요한 일에 집중하는 것과</p>
                <p>그 과정을 좋아하는 프론트엔드 개발자입니다.</p>
              </div>

              {/* Technical Skills */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">
                  기술 스택 요약
                </h3>
                <div className="grid gap-4">
                  {techSkills.map((skill, index) => (
                    <AnimatedSection
                      key={index}
                      animation="fade-up"
                      delay={index * 100 + 400}
                    >
                      <Card className="border-2 border-gray-200 hover:border-green-300 transition-colors duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-6">
                            {/* Icon Circle */}
                            <div className="flex-shrink-0">
                              <div className="w-20 h-20 rounded-full border-4 border-green-500 flex items-center justify-center bg-green-50">
                                <span className="text-2xl">💻</span>
                              </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                                {skill.title}
                              </h4>
                              <p className="text-gray-600 text-lg leading-relaxed">
                                {skill.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </AnimatedSection>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">
                  주요 성과 요약
                </h3>
                <div className="grid gap-4">
                  {achievements.map((achievement, index) => (
                    <AnimatedSection
                      key={index}
                      animation="fade-up"
                      delay={index * 100 + 600}
                    >
                      <Card className="border-2 border-gray-200 hover:border-blue-300 transition-colors duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-6">
                            {/* Percentage Circle */}
                            <div className="flex-shrink-0">
                              <div className="w-20 h-20 rounded-full border-4 border-blue-500 flex items-center justify-center bg-blue-50">
                                <span className="text-2xl font-bold text-blue-600">
                                  {achievement.percentage}
                                </span>
                              </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                                {achievement.title}
                              </h4>
                              <p className="text-gray-600 text-lg leading-relaxed">
                                {achievement.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
