import { AppContainer, AppFooter, NavigationBar } from '@upskill-app/ui/web';
import { HeroSection, KeyFeaturesSection } from '@upskill-app/web-modules/home';

export default function Index() {
  return (
    <>
      <NavigationBar />
      <AppContainer>
        <div className="flex min-h-dvh flex-col">
          <main className="flex-1">
            <HeroSection />
            <KeyFeaturesSection />
          </main>
        </div>
      </AppContainer>
      <AppFooter />
    </>
  );
}
