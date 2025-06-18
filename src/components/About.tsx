'use client';

import { useEffect, useRef, useState } from 'react';
import AnimatedSection from './AnimatedSection';

export default function About() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Start count-up animations
          const numberElements =
            entry.target.querySelectorAll('.highlight-number');
          numberElements.forEach((element, index) => {
            const target = Number.parseInt(
              element.getAttribute('data-target') || '0',
            );
            const isDecimal = element
              .getAttribute('data-target')
              ?.includes('.');

            setTimeout(() => {
              element.classList.add('animate-highlight');

              let current = 0;
              const increment = target / 30;
              const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                  current = target;
                  clearInterval(timer);
                }

                if (isDecimal) {
                  element.textContent = current.toFixed(1);
                } else {
                  element.textContent = Math.floor(current).toString();
                }

                element.classList.add('counting');
                setTimeout(() => element.classList.remove('counting'), 300);
              }, 50);
            }, index * 200);
          });
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section id="about" className="py-20 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="fade-right" delay={200}>
            <div>
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                <div className="w-72 h-72 bg-white rounded-full flex items-center justify-center overflow-hidden">
                  <img
                    src="/placeholder.svg?height=288&width=288"
                    alt="Alex Johnson"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-left" delay={400}>
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">
                반복적이고 불필요한 작업을 최소화하는 대신,
                <br /> 서비스에 진정으로 필요한 일에 집중하는 것과 <br />그
                과정을 좋아하는 프론트엔드 개발자입니다.
              </h3>
              <div className="flex flex-col gap-2">
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-bold">Javascript</span>,{' '}
                  <span className="font-bold">Typescript</span> 기반 개발 경험
                  5년 이상 보유
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-bold">React.js</span>,{' '}
                  <span className="font-bold">Vue.js</span>와 같은 모던
                  라이브러리/프레임워크 기반 개발 경험 및{' '}
                  <span className="font-bold">Next.js</span> 와 같은{' '}
                  <span className="font-bold">SSR</span> 기반 서비스의 개발 및
                  최적화 경험
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-bold">Webpack</span>,{' '}
                  <span className="font-bold">Vite</span>,{' '}
                  <span className="font-bold">Rollup</span>과 같은 번들러
                  커스터마이징을 통한 앱 배포 및 최적화 경험
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-bold">EC2</span>,{' '}
                  <span className="font-bold">Linux</span>,{' '}
                  <span className="font-bold">Nginx</span>,{' '}
                  <span className="font-bold">Docker</span>,{' '}
                  <span className="font-bold">Github Actions</span> 활용한
                  devops 경험
                </p>
              </div>

              {/* Achievement List */}
              <div className="space-y-4 pt-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  주요 성과 요약
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span className="text-gray-700">
                      개선하여 코드 양{' '}
                      <span
                        className="font-bold text-blue-600 highlight-number"
                        data-target="18"
                      >
                        0%
                      </span>
                      감소, 퍼포먼스{' '}
                      <span
                        className="font-bold text-blue-600 highlight-number"
                        data-target="30"
                      >
                        0%
                      </span>
                      향상, 핵심 로직 커버리지{' '}
                      <span
                        className="font-bold text-blue-600 highlight-number"
                        data-target="100"
                      >
                        0%
                      </span>
                      달성
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span className="text-gray-700">
                      Next.js Server Cache, React-Query 등 API 캐싱으로 중복 API
                      호출 수 최대{' '}
                      <span
                        className="font-bold text-blue-600 highlight-number"
                        data-target="80"
                      >
                        80%
                      </span>
                      감소
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span className="text-gray-700">
                      Chat GPT, V0 등 각종 AI 툴 활용하여 단순작업 소요시간 최대{' '}
                      <span
                        className="font-bold text-blue-600 highlight-number"
                        data-target="80"
                      >
                        0
                      </span>
                      % 감소
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span className="text-gray-700">
                      기존 인프라 배포환경 개선하여 Node 호환성 이슈 해결,
                      배포시간{' '}
                      <span
                        className="font-bold text-blue-600 highlight-number"
                        data-target="5"
                      >
                        0분
                      </span>
                      →{' '}
                      <span
                        className="font-bold text-blue-600 highlight-number"
                        data-target="1.5"
                      >
                        0분, 배포용량 XX% 감소
                      </span>
                    </span>
                  </li>
                </ul>
              </div>

              <AnimatedSection animation="fade-up" delay={600}>
                <div className="grid grid-cols-2 gap-4 pt-6">
                  <div className="transform hover:scale-105 transition-transform duration-200">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Experience
                    </h4>
                    <p className="text-gray-600">3+ Years</p>
                  </div>
                  <div className="transform hover:scale-105 transition-transform duration-200">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Projects
                    </h4>
                    <p className="text-gray-600">50+ Completed</p>
                  </div>
                  <div className="transform hover:scale-105 transition-transform duration-200">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Location
                    </h4>
                    <p className="text-gray-600">San Francisco, CA</p>
                  </div>
                  <div className="transform hover:scale-105 transition-transform duration-200">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Availability
                    </h4>
                    <p className="text-gray-600">Open to Work</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
