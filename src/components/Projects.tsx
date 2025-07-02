'use client';

import { useEffect, useRef, useState } from 'react';
import {
  ExternalLink,
  Github,
  Eye,
  Calendar,
  Users,
  Target,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import AnimatedSection from './AnimatedSection';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  details: {
    overview: string;
    features: string[];
    challenges: string[];
    solutions: string[];
    duration: string;
    teamSize: string;
    role: string;
    results: string[];
  };
}

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      title: '오늘의 배송 Toodee - 배송접수 UI 개선',
      description:
        '기존 퀵, 택배접수 UI의 리뉴얼 및 편의 기능 추가, 코드 리팩토링, 최적화를 담당하여 퍼포먼스 30% 향상과 코드 양 18% 감소를 달성했습니다.',
      image: '/placeholder.svg?height=300&width=400',
      technologies: [
        'React',
        'Next.js',
        'TypeScript',
        'React Hook Form',
        'Zod',
        'React Query',
        'Vitest',
        'MSW',
        'Storybook',
      ],
      liveUrl: 'https://toodee.co.kr',
      details: {
        overview:
          '레거시 배송접수 페이지를 현대적인 기술 스택으로 개선하여 사용자 경험과 개발자 경험을 모두 향상시킨 프로젝트입니다. 코드 품질 개선과 성능 최적화에 중점을 두었습니다.',
        features: [
          'React Hook Form과 Zod를 활용한 폼 검증 시스템',
          'React Query를 통한 효율적인 서버 상태 관리',
          'Vitest와 React Testing Library를 활용한 테스트 환경 구축',
          'MSW 2.x를 활용한 일관성 있는 모킹 환경',
          'Web Vitals 지표 개선을 통한 성능 최적화',
          'Page Router에서 App Router로의 점진적 마이그레이션',
        ],
        challenges: [
          '레거시 코드의 복잡한 구조와 기술 부채',
          '기존 기능을 유지하면서 새로운 기술 스택 도입',
          '성능 최적화와 코드 품질 개선의 균형',
          '테스트 커버리지 확보와 안정성 보장',
        ],
        solutions: [
          'React Hook Form과 Zod 도입으로 폼 관리 로직 간소화',
          'React Query를 통한 서버 상태 관리 최적화',
          'Vitest와 MSW를 활용한 포괄적인 테스트 환경 구축',
          'Web Vitals 지표 모니터링을 통한 성능 개선',
        ],
        duration: '4개월 (2024.10 - 2025.01)',
        teamSize: '프론트엔드 파트장 (팀 리드)',
        role: '프론트엔드 개발 리드',
        results: [
          '코드 양 18% 감소로 유지보수성 향상',
          '퍼포먼스 30% 향상으로 사용자 경험 개선',
          '핵심 로직 테스트 커버리지 100% 달성',
          'LCP 48% 감소, FCP 60% 감소로 로딩 성능 개선',
        ],
      },
    },
    {
      title: 'O2pluss Design System',
      description:
        'O2pluss 내 모든 프로젝트에 범용으로 사용되는 UI 라이브러리를 제작하여 UI 작업공수를 평균 70% 감소시켰습니다.',
      image: '/placeholder.svg?height=300&width=400',
      technologies: [
        'React',
        'TypeScript',
        'Vite',
        'Storybook',
        'GitHub Actions',
        'Chromatic',
        'Rollup',
      ],
      githubUrl: 'https://github.com/o2pluss',
      details: {
        overview:
          '회사 내 모든 프로젝트에서 일관된 UI/UX를 제공하고 개발 효율성을 높이기 위한 디자인 시스템 라이브러리입니다. 재사용 가능한 컴포넌트와 자동화된 문서화 시스템을 구축했습니다.',
        features: [
          '재사용 가능하고 커스터마이징 가능한 컴포넌트 라이브러리',
          'Vite를 활용한 다양한 환경(SSR, CJS, ESM) 지원',
          'Storybook을 통한 컴포넌트 문서화 및 예제 제공',
          'GitHub Actions를 활용한 자동 배포 파이프라인',
          'Chromatic을 통한 시각적 회귀 테스트',
          'AI를 활용한 문서화 자동화',
        ],
        challenges: [
          '다양한 프로젝트 환경에서 호환되는 라이브러리 구축',
          '일관된 디자인 시스템 구축과 유지보수',
          '효율적인 문서화 및 배포 자동화',
          '개발팀 전체의 라이브러리 도입과 활용',
        ],
        solutions: [
          'Vite를 활용한 모듈 번들링으로 다양한 환경 지원',
          'Storybook과 AI를 활용한 자동화된 문서화 시스템',
          'GitHub Actions와 GitHub Packages를 통한 CI/CD 구축',
          '점진적 도입 전략과 팀 교육을 통한 안정적인 전환',
        ],
        duration: '6개월 (2024.02 - 2024.08)',
        teamSize: '프론트엔드 파트장 (단독 개발)',
        role: '디자인 시스템 아키텍트 & 개발자',
        results: [
          'UI 작업공수 평균 30-50% 감소',
          '문서화 관련 작업시간 80% 감소',
          '전사 프로젝트 UI 일관성 확보',
          '개발팀 생산성 대폭 향상',
        ],
      },
    },
    {
      title: 'Toodee 배포환경 및 CI/CD 개선',
      description:
        '기존의 비효율적인 투디의 배포환경을 최적의 구조로 개선하여 배포시간을 5분에서 1.5분으로 단축했습니다.',
      image: '/placeholder.svg?height=300&width=400',
      technologies: [
        'Docker',
        'Nginx',
        'PM2',
        'Next.js',
        'GitHub Actions',
        'Node.js',
      ],
      details: {
        overview:
          '기존의 비효율적인 배포 프로세스를 Docker 기반의 현대적인 배포 환경으로 개선하여 배포 시간 단축과 안정성을 확보한 인프라 개선 프로젝트입니다.',
        features: [
          'Docker 이미지 기반 배포 방식으로 전환',
          'Nginx와 PM2 빌드 커맨드 최적화',
          'Next.js standalone 배포 방식 적용',
          'Node 버전 호환성 이슈 해결',
          '배포 용량 최적화',
        ],
        challenges: [
          'Node 버전 호환성으로 인한 배포 실패',
          '긴 배포 시간으로 인한 개발 효율성 저하',
          '배포 용량 최적화 필요',
          '안정적인 배포 환경 구축',
        ],
        solutions: [
          'Docker 이미지 배포 방식으로 Node 호환성 이슈 해결',
          'Nginx와 PM2 설정 최적화로 빌드 시간 단축',
          'Next.js standalone 모드 적용으로 배포 용량 감소',
          '자동화된 배포 파이프라인 구축',
        ],
        duration: '2개월 (2024.06 - 2024.07)',
        teamSize: '프론트엔드 파트장 (DevOps 담당)',
        role: 'DevOps 엔지니어 & 프론트엔드 개발자',
        results: [
          '배포시간 5분 → 1.5분으로 70% 단축',
          'Node 호환성 이슈 완전 해결',
          '배포 용량 대폭 감소',
          '배포 안정성 및 신뢰성 향상',
        ],
      },
    },
    {
      title: 'Coconuts 컨설팅 리뉴얼',
      description:
        'Vue.js 기반 레거시 서비스의 UI/UX 개선 및 내부 로직 개선 작업과 범용 컨설팅 서비스를 위한 설계 변경을 진행했습니다.',
      image: '/placeholder.svg?height=300&width=400',
      technologies: [
        'React',
        'Vue.js',
        'TypeScript',
        'Webpack',
        'Module Federation',
        'Pinia',
        'Mermaid',
      ],
      details: {
        overview:
          'Vue.js 기반의 레거시 컨설팅 서비스를 React 기반으로 점진적으로 전환하면서 UI/UX 개선과 아키텍처 현대화를 진행한 대규모 리뉴얼 프로젝트입니다.',
        features: [
          'Webpack Module Federation을 활용한 점진적 마이그레이션',
          'Vue에서 React로의 기술 스택 전환',
          'TypeScript 마이그레이션으로 타입 안정성 확보',
          'Mermaid를 활용한 인터페이스 시각화',
          'Vue Composition API와 Pinia를 활용한 상태 관리 개선',
        ],
        challenges: [
          'Vue.js에서 React로의 점진적 마이그레이션',
          '레거시 JavaScript 코드의 TypeScript 전환',
          '복잡한 데이터 구조의 가독성 개선',
          '기존 기능 유지하면서 새로운 아키텍처 적용',
        ],
        solutions: [
          'Module Federation을 활용한 단계적 마이그레이션 전략',
          'TypeScript 점진적 도입으로 안정성 확보',
          'Mermaid 다이어그램으로 데이터 구조 시각화',
          'Vue Composition API와 Pinia로 상태 관리 현대화',
        ],
        duration: '9개월 (2024.03 - 2024.12)',
        teamSize: '프론트엔드 파트장',
        role: '프론트엔드 아키텍트 & 개발 리드',
        results: [
          'Vue에서 React로 성공적인 기술 스택 전환',
          'TypeScript 도입으로 코드 안정성 향상',
          '데이터 구조 가독성 대폭 개선',
          '유지보수성과 확장성 확보',
        ],
      },
    },
    {
      title: 'VLOC Console',
      description:
        'SDK의 사용량에 대한 결제 및 토큰 발급, 사용량 모니터링이 가능한 B2C 서비스를 개발하여 API 호출수 감소와 빌드시간 40% 단축을 달성했습니다.',
      image: '/placeholder.svg?height=300&width=400',
      technologies: [
        'React',
        'Next.js',
        'React Query',
        'TypeScript',
        'Docker',
        'Jest',
        'Testing Library',
      ],
      details: {
        overview:
          'SDK 사용량 모니터링과 결제 시스템을 제공하는 B2C 콘솔 서비스입니다. 성능 최적화와 개발 효율성에 중점을 두어 개발했습니다.',
        features: [
          'React Query를 활용한 API 캐싱 시스템',
          'ISR을 적용한 서버 사이드 캐싱',
          'Docker 멀티 스테이지 빌드 최적화',
          '번들 최적화를 통한 Web Vitals 개선',
          'Jest와 Testing Library 기반 테스트 환경',
        ],
        challenges: [
          '대량의 API 호출로 인한 성능 이슈',
          '빌드 시간과 배포 용량 최적화',
          'Web Vitals 성능 지표 개선',
          '안정적인 테스트 환경 구축',
        ],
        solutions: [
          'React Query 도입으로 클라이언트 캐싱 최적화',
          'ISR 적용으로 서버 사이드 캐싱 구현',
          'Docker 최적화로 빌드 및 배포 효율성 향상',
          '번들 분석과 최적화로 성능 지표 개선',
        ],
        duration: '6개월 (2022.10 - 2023.03)',
        teamSize: '프론트엔드 개발자 (팀원)',
        role: '프론트엔드 개발자',
        results: [
          'API 호출횟수 17% 감소',
          '공통 API 호출수 1/10 감소',
          '빌드시간 40% 감소, 배포 소요시간 60% 감소',
          'Web Vitals 성능 지표 70→90점 이상 달성',
        ],
      },
    },
    {
      title: 'Editor 2.0',
      description:
        '레거시 Editor를 리뉴얼하고 최신 기술스택을 적용하여 로드시간을 5.5초에서 2초로 단축하고 테스트 커버리지 50%를 확보했습니다.',
      image: '/placeholder.svg?height=300&width=400',
      technologies: [
        'React',
        'Redux Toolkit',
        'TypeScript',
        'Webpack',
        'ESBuild',
        'Jest',
        'Storybook',
      ],
      details: {
        overview:
          '레거시 에디터를 현대적인 기술 스택으로 완전히 리뉴얼한 프로젝트입니다. 성능 최적화와 개발자 경험 개선에 중점을 두었습니다.',
        features: [
          'Redux Toolkit을 활용한 상태 관리 현대화',
          'Webpack 기반 프로젝트 스캐폴딩',
          'ESBuild-loader를 통한 빌드 최적화',
          'Jest와 React Testing Library 테스트 환경',
          'Storybook을 활용한 컴포넌트 문서화',
        ],
        challenges: [
          '레거시 Redux 코드의 복잡성',
          '긴 로드 시간으로 인한 사용자 경험 저하',
          '테스트 환경 부재로 인한 품질 관리 어려움',
          '컴포넌트 문서화 및 관리 체계 부족',
        ],
        solutions: [
          'Redux Toolkit 도입으로 상태 관리 로직 간소화',
          'ESBuild-loader 적용으로 빌드 성능 대폭 개선',
          'Jest와 Testing Library로 포괄적인 테스트 환경 구축',
          'Storybook을 통한 컴포넌트 문서화 시스템 구축',
        ],
        duration: '6개월 (2021.06 - 2021.12)',
        teamSize: '프론트엔드 개발자',
        role: '프론트엔드 개발자',
        results: [
          '로드시간 5.5초 → 2초로 64% 단축',
          '테스트 커버리지 50% 확보',
          'Redux 코드 복잡성 대폭 감소',
          '개발자 경험 및 유지보수성 향상',
        ],
      },
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              주요 프로젝트
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          </div>
        </AnimatedSection>

        <div
          ref={projectsRef}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children ${isVisible ? 'animate' : ''}`}
        >
          {projects.map((project, index) => (
            <Card
              key={index}
              className="flex flex-col h-full overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-2"
            >
              <div className="aspect-video bg-gray-200 overflow-hidden">
                <img
                  src={project.image || '/placeholder.svg'}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full hover:bg-blue-200 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
                <div className="mt-auto">
                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-transform duration-200"
                    onClick={() => setSelectedProject(project)}
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    프로젝트 자세히 알아보기
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <Dialog
        open={!!selectedProject}
        onOpenChange={() => setSelectedProject(null)}
      >
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              {selectedProject?.title}
            </DialogTitle>
          </DialogHeader>

          {selectedProject && (
            <div className="space-y-6">
              {/* Project Image */}
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src={selectedProject.image || '/placeholder.svg'}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overview */}
              <div>
                <h3 className="text-lg font-semibold mb-3">프로젝트 개요</h3>
                <p className="text-gray-700 leading-relaxed">
                  {selectedProject.details.overview}
                </p>
              </div>

              {/* Project Info */}
              <div className="grid md:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-600">기간</p>
                    <p className="font-medium">
                      {selectedProject.details.duration}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-green-600" />
                  <div>
                    <p className="text-sm text-gray-600">팀 구성</p>
                    <p className="font-medium">
                      {selectedProject.details.teamSize}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-purple-600" />
                  <div>
                    <p className="text-sm text-gray-600">역할</p>
                    <p className="font-medium">
                      {selectedProject.details.role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-lg font-semibold mb-3">사용 기술</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-lg font-semibold mb-3">주요 기능</h3>
                <ul className="space-y-2">
                  {selectedProject.details.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenges & Solutions */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">주요 도전과제</h3>
                  <ul className="space-y-2">
                    {selectedProject.details.challenges.map(
                      (challenge, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-red-500 mt-1">•</span>
                          <span className="text-gray-700">{challenge}</span>
                        </li>
                      ),
                    )}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">해결 방안</h3>
                  <ul className="space-y-2">
                    {selectedProject.details.solutions.map(
                      (solution, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          <span className="text-gray-700">{solution}</span>
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              </div>

              {/* Results */}
              <div>
                <h3 className="text-lg font-semibold mb-3">주요 성과</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {selectedProject.details.results.map((result, index) => (
                    <div
                      key={index}
                      className="p-3 bg-green-50 border border-green-200 rounded-lg"
                    >
                      <p className="text-green-800 font-medium">{result}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Links */}
              {(selectedProject.liveUrl || selectedProject.githubUrl) && (
                <div className="flex gap-4 pt-4 border-t">
                  {selectedProject.liveUrl && (
                    <Button asChild variant="outline">
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        라이브 사이트
                      </a>
                    </Button>
                  )}
                  {selectedProject.githubUrl && (
                    <Button asChild variant="outline">
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  )}
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
