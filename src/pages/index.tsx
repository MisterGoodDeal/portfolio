import DefaultLayout from "@/layouts/default";
import DotGrid from "../components/DotsGrid.component";
import GradualBlur from "../components/GradualBlur.component";
import TextPressure from "../components/TextPressure.component";
import TextType from "../components/TextType.component";
import { GithubLogoIcon } from "@phosphor-icons/react";
import ModelViewer from "../components/ModelViewer.component";
import { Button } from "@heroui/react";

export default function IndexPage() {
  return (
    <DefaultLayout>
      {/* Section avec grille - 80% de hauteur */}
      <section
        className="dark text-foreground bg-background w-full"
        style={{
          position: "relative",
          height: "90vh",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        >
          <DotGrid
            dotSize={3}
            gap={15}
            baseColor="#00163b"
            activeColor="#1e0094"
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
        </div>

        <div
          style={{
            position: "relative",
            zIndex: 10,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "2rem",
            width: "100%",
            maxWidth: "100%",
          }}
        >
          <div className="w-full max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
              <div className="flex flex-col justify-center items-start">
                <TextPressure
                  text="Milan"
                  flex
                  weight={true}
                  italic={true}
                  textColor="#ffffff"
                  minFontSize={36}
                />

                <TextType
                  text={[
                    "Frontend Developer",
                    "Backend Developer",
                    "Mobile Developer",
                  ]}
                  className="text-2xl text-white"
                  typingSpeed={75}
                  deletingSpeed={50}
                  pauseDuration={3000}
                  showCursor={true}
                  loop
                  cursorCharacter="_"
                  as="h2"
                />
                <div>
                  <Button
                    className="mt-8"
                    style={{
                      zIndex: 1000,
                    }}
                    color="secondary"
                    variant="shadow"
                    size="lg"
                    startContent={<GithubLogoIcon size={24} weight="duotone" />}
                    href="https://github.com/mistergooddeal"
                  >
                    GitHub Profile
                  </Button>
                </div>
              </div>

              <div className="flex flex-col justify-center items-center">
                <ModelViewer
                  url="/Laptop.glb"
                  width={600}
                  height={600}
                  defaultRotationX={-110}
                  defaultRotationY={10}
                  defaultZoom={1.5}
                  autoFrame
                  maxZoomDistance={1.5}
                  minZoomDistance={1.5}
                  modelXOffset={0}
                  modelYOffset={0.3}
                />
              </div>
            </div>
          </div>
        </div>

        <GradualBlur
          target="page"
          position="bottom"
          height="6rem"
          strength={2}
          divCount={5}
          curve="bezier"
          exponential={true}
          opacity={1}
          zIndex={5}
        />
      </section>

      <section className="dark text-foreground bg-background w-full py-16"></section>
    </DefaultLayout>
  );
}
