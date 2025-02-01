import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
        </div>
        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" name="name" type="text" required className="mt-1" />
            </div>
            <div>
              <Label htmlFor="email">Email address</Label>
              <Input id="email" name="email" type="email" required className="mt-1" />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" required className="mt-1" />
            </div>
          </div>

          <div>
            <Button type="submit" className="w-full bg-primary-600 hover:bg-primary-700">
              Sign up
            </Button>
          </div>
        </form>
        <div className="text-center">
          <Link to="/login" className="text-primary-600 hover:text-primary-700">
            Already have an account? Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;