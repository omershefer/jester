import React, { createContext, useContext, useState, useEffect } from "react";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  User,
  reload,
  UserCredential,
  updateProfile
} from "firebase/auth";
import firebaseApp from '../services/firebase-config';

const auth = getAuth(firebaseApp);

interface AuthContextType {
  currentUser: User | null;
  login: (email: string, password: string) => Promise<UserCredential>;
  signup: (email: string, password: string, name:string) => Promise<boolean>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Use Firebase's reload function instead of calling reload on user
        await reload(user);
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signup = async (email: string, password: string, name: string) => {
    // Create the user account first
    try {
      const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    // Then immediately update the profile before returning
    if (userCredential.user) {
      console.log("created user, updating name");      
      await updateProfile(userCredential.user, { displayName: name });
      // Force a refresh of the user token
      console.log("user before refresh: ", userCredential.user);
      
      await userCredential.user.reload();
      console.log("user after refresh: ", userCredential.user);

      setCurrentUser(userCredential.user);
    }
    return true
    } catch (err) {
      console.error(err); 
      return false
    }
  };

  const logout = () => {
    return signOut(auth);
  };

  const value = {
    currentUser,
    login,
    signup,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
