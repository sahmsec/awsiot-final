import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import CourseModule from "./pages/CourseModule";
import { Layout } from "@/components/layout/Layout";
import Home from "@/pages/Home";
import Apply from "@/pages/Apply";
import AboutUs from "./pages/AboutUs";
import Program from "@/pages/Program";
import Gallery from "@/pages/Gallery";
import Contact from "@/pages/Contact";
import Course from "@/pages/Course";
import Login from "@/pages/Login";
import Library from "@/pages/Library";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/apply" component={Apply} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/academics/:type" component={Program} />
        <Route path="/courses/:type" component={Course} />
        <Route path="/course-module" component={CourseModule} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/library" component={Library} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
        <Route path="/students" component={() => <div className="py-20 text-center">Students Page (Coming Soon)</div>} />
        <Route component={NotFound} />

      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <TooltipProvider>
      <Toaster />
      <Router />
    </TooltipProvider>
  );
}

export default App;