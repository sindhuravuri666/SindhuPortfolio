import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Developer and Tech Community Builder
            </h3>

            <p className="text-muted-foreground">
              I'm a passionate developer and tech community builder with a deep
              interest in AI, open-source, and scalable cloud-native
              applications. I specialize in crafting responsive, performant, and
              secure web experiences using modern stacks like React, Node.js,
              and Google Cloud Platform.
            </p>

            <p className="text-muted-foreground">
              As the founder of EventAura, I’ve built a platform used by 4,000+
              students across India, integrating QR-based ticketing, real-time
              analytics, and seamless payment systems. My work has powered
              events at Microsoft Hyderabad and generated over ₹8,00,000 in
              revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    {" "}
                    MERN Stack Development
                  </h4>
                  <p className="text-muted-foreground">
                    Building scalable and secure web applications using the MERN
                    stack with CI/CD pipelines and containerized deployments on
                    GCP and AWS..
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Cloud Infrastructure
                  </h4>
                  <p className="text-muted-foreground">
                    Deploying and managing cloud-native applications using
                    Docker, Kubernetes, and GCP/AWS.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Project & Product Leadership
                  </h4>
                  <p className="text-muted-foreground">
                    Driving full product lifecycles from ideation to deployment
                    with a focus on real-world impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
