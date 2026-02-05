import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { PLANS, type Plan } from "@/lib/plans";

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  companyName?: string;
  plan: string;
  estimatesThisMonth: number;
  isAdmin: boolean;
  createdAt: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (data: RegisterData) => Promise<boolean>;
  logout: () => void;
  updateUser: (data: Partial<User>) => void;
  canCreateEstimate: () => boolean;
  getRemainingEstimates: () => number | string;
  incrementEstimateCount: () => void;
  getUserPlan: () => Plan;
}

interface RegisterData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  companyName?: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Demo users for testing
const DEMO_USERS: Record<string, { password: string; user: User }> = {
  "demo@example.com": {
    password: "demo123",
    user: {
      id: "1",
      email: "demo@example.com",
      firstName: "Demo",
      lastName: "User",
      companyName: "Demo Construction",
      plan: "free",
      estimatesThisMonth: 2,
      isAdmin: false,
      createdAt: new Date().toISOString(),
    },
  },
  "admin@example.com": {
    password: "admin123",
    user: {
      id: "2",
      email: "admin@example.com",
      firstName: "Admin",
      lastName: "User",
      companyName: "Admin Corp",
      plan: "enterprise",
      estimatesThisMonth: 0,
      isAdmin: true,
      createdAt: new Date().toISOString(),
    },
  },
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for stored user on mount
    const storedUser = localStorage.getItem("estimator_user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch {
        localStorage.removeItem("estimator_user");
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));

    const demoUser = DEMO_USERS[email.toLowerCase()];
    if (demoUser && demoUser.password === password) {
      setUser(demoUser.user);
      localStorage.setItem("estimator_user", JSON.stringify(demoUser.user));
      return true;
    }

    // For demo purposes, allow any login with password "demo"
    if (password === "demo") {
      const newUser: User = {
        id: Math.random().toString(36).substr(2, 9),
        email: email.toLowerCase(),
        firstName: email.split("@")[0],
        lastName: "User",
        plan: "free",
        estimatesThisMonth: 0,
        isAdmin: false,
        createdAt: new Date().toISOString(),
      };
      setUser(newUser);
      localStorage.setItem("estimator_user", JSON.stringify(newUser));
      return true;
    }

    return false;
  };

  const register = async (data: RegisterData): Promise<boolean> => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));

    const newUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      email: data.email.toLowerCase(),
      firstName: data.firstName,
      lastName: data.lastName,
      companyName: data.companyName,
      plan: "free",
      estimatesThisMonth: 0,
      isAdmin: false,
      createdAt: new Date().toISOString(),
    };

    setUser(newUser);
    localStorage.setItem("estimator_user", JSON.stringify(newUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("estimator_user");
  };

  const updateUser = (data: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...data };
      setUser(updatedUser);
      localStorage.setItem("estimator_user", JSON.stringify(updatedUser));
    }
  };

  const canCreateEstimate = (): boolean => {
    if (!user) return false;
    const plan = PLANS[user.plan];
    if (plan.estimatesPerMonth === -1) return true;
    return user.estimatesThisMonth < plan.estimatesPerMonth;
  };

  const getRemainingEstimates = (): number | string => {
    if (!user) return 0;
    const plan = PLANS[user.plan];
    if (plan.estimatesPerMonth === -1) return "Unlimited";
    return Math.max(0, plan.estimatesPerMonth - user.estimatesThisMonth);
  };

  const incrementEstimateCount = () => {
    if (user) {
      updateUser({ estimatesThisMonth: user.estimatesThisMonth + 1 });
    }
  };

  const getUserPlan = (): Plan => {
    if (!user) return PLANS.free;
    return PLANS[user.plan] || PLANS.free;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        register,
        logout,
        updateUser,
        canCreateEstimate,
        getRemainingEstimates,
        incrementEstimateCount,
        getUserPlan,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
