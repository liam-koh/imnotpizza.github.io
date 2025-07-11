import AnimatedSection from './AnimatedSection';
import { Card, CardContent } from '@/components/ui/card';

export default function About() {
  const techStacks = [
    {
      title: 'Frontend Development',
      description:
        'Javascript, Typescript 기반 React, Vue.js, Next.js 등 모던 프레임워크를 활용한 서비스 개발 경험 5년 이상',
    },

    {
      title: 'Build & Bundle',
      description:
        'Webpack, Vite, Rollup 등 번들러 커스터마이징을 통한 최적화 및 라이브러리 배포 경험',
    },
    {
      title: 'DevOps & Deploy',
      description:
        'EC2, Docker, GitHub Actions 등을 활용한 CI/CD 구축 및 배포 최적화',
    },
    {
      title: 'Testing',
      description:
        'Jest, Vitest, React Testing Library 활용한 체계적 단위테스트 작성, 시각',
    },
  ];

  const achievements = [
    {
      title: '성능 최적화',
      description: '퍼포먼스 30% 향상, Web Vitals 70→90점 달성',
      icon: '⚡',
    },
    {
      title: '코드 품질 개선',
      description: '코드 양 18% 감소, 테스트 커버리지 100% 달성',
      icon: '✨',
    },
    {
      title: '기술 스택 전환',
      description: 'Vue.js에서 React로 성공적인 마이그레이션 완료',
      icon: '🔄',
    },
    {
      title: '사용자 경험 향상',
      description: '사용자 참여도 40% 증가, 전환율 25% 향상',
      icon: '📈',
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

        <div className="space-y-16">
          {/* Main Description */}
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="space-y-2 text-gray-700 text-2xl lg:text-3xl font-bold text-center">
              <p>반복적이고 불필요한 작업을 최소화하는 대신,</p>
              <p>서비스에 진정으로 필요한 일에 집중하는 것과</p>
              <p>그 과정을 좋아하는 프론트엔드 개발자입니다.</p>
            </div>
          </AnimatedSection>

          {/* 기술스택 섹션 */}
          <div className="space-y-8">
            <AnimatedSection animation="fade-up" delay={400}>
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
                기술스택
              </h3>
            </AnimatedSection>

            <div className="grid gap-6 md:grid-cols-2">
              {techStacks.map((tech, index) => (
                <AnimatedSection
                  key={index}
                  animation="fade-up"
                  delay={index * 100 + 500}
                >
                  <Card className="border-2 border-gray-200 hover:border-blue-300 transition-colors duration-300 h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        {/* Content */}
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold text-gray-800 mb-2">
                            {tech.title}
                          </h4>
                          <p className="text-gray-600 text-base leading-relaxed">
                            {tech.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* 주요 성과 섹션 */}
          <div className="space-y-8">
            <AnimatedSection animation="fade-up" delay={800}>
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
                주요 성과
              </h3>
            </AnimatedSection>

            <div className="grid gap-6 md:grid-cols-2">
              {achievements.map((achievement, index) => (
                <AnimatedSection
                  key={index}
                  animation="fade-up"
                  delay={index * 100 + 900}
                >
                  <Card className="border-2 border-gray-200 hover:border-green-300 transition-colors duration-300 h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        {/* Content */}
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold text-gray-800 mb-2">
                            {achievement.title}
                          </h4>
                          <p className="text-gray-600 text-base leading-relaxed">
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
      </div>
    </section>
  );
}
