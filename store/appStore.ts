import { create } from "zustand";

export type TokensType = {
    access: string | null;
    refresh: string | null;
};

export type UserType = {
    id?: number;
    email?: string;
};

export type AuthType = {
    user: UserType | null;
    tokens: TokensType;
    isAuthenticated: boolean;
};

export type State = {
    auth: AuthType;
    setAuthTokens: (tokens: TokensType) => void;
    logout: () => void;
};

const useAppStore = create<State>((set) => ({
    auth: {
        user: null,
        tokens: {
            access: null,
            refresh: null
        },
        isAuthenticated: false
    },
    setAuthTokens: (tokens) => set((state) => ({
        auth: {
            ...state.auth,
            tokens,
            isAuthenticated: true
        }
    })),
    logout: () => set({
        auth: {
            user: null,
            tokens: {
                access: null,
                refresh: null
            },
            isAuthenticated: false
        }
    })
}));

export default useAppStore;