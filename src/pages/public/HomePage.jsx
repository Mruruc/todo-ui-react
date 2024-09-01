import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <main className="container pt-4 text-center">
        <h1 className="display-4 fw-bold mb-4">
          Next Generation To-Do Web Application
        </h1>
        <p className="lead text-muted mb-5">
          Welcome to the future of productivity! Our innovative To-Do web
          application is designed to help you organize your tasks, manage your
          time, and achieve your goals more efficiently than ever before.
        </p>
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Intuitive Interface</h5>
                <p className="card-text">
                  Effortlessly create, categorize, and prioritize your tasks
                  with our user-friendly design.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Seamless Synchronization</h5>
                <p className="card-text">
                  Access your to-do list from any device, anytime. Your data is
                  securely synchronized across all your devices.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Smart Reminders</h5>
                <p className="card-text">
                  Never miss a deadline again with customizable reminders and
                  notifications.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Collaboration</h5>
                <p className="card-text">
                  Share tasks and lists with friends, family, or colleagues to
                  stay connected and productive together.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Advanced Analytics</h5>
                <p className="card-text">
                  Track your productivity with detailed insights and reports to
                  optimize your workflow.
                </p>
              </div>
            </div>
          </div>
        </div>
        <h2 className="mt-5">Why Choose Our App?</h2>
        <p className="text-muted">
          Our To-Do application is more than just a list manager—it's a complete
          productivity solution. With features like smart AI suggestions, dark
          mode, and customizable themes, we cater to your personal and
          professional needs. Plus, our app is completely free to use, with no
          ads or in-app purchases.
        </p>
        <NavLink to='/sign-up' className="btn btn-success btn-lg mt-4">
          Get Started Now!
        </NavLink>
      </main>
    </>
  );
};

export default HomePage;
