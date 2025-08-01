"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sword, Shield, Coins, Users, TrendingUp, Award, Zap } from "lucide-react"

export function HeroSection({ onNavigate }) {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Professional Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)] opacity-50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(120,119,198,0.1),transparent_50%)] opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <Badge variant="outline" className="mb-6 text-primary border-primary/50 bg-primary/10">
            Powered by Monad Blockchain
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            SHADOW FIGHTERS
            <span className="block text-3xl md:text-4xl mt-2 text-muted-foreground font-normal">
              Professional Gaming Platform
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            The premier Web3 combat platform where skill meets strategy. Build your professional fighter identity,
            participate in competitive staking, and trade valuable gaming assets.
          </p>
        </div>

        {/* Professional Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm border rounded-lg p-6 text-center">
            <div className="flex items-center justify-center mb-3">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-primary mb-1">10,000+</div>
            <p className="text-sm text-muted-foreground">Active Players</p>
          </div>
          <div className="bg-card/50 backdrop-blur-sm border rounded-lg p-6 text-center">
            <div className="flex items-center justify-center mb-3">
              <TrendingUp className="w-8 h-8 text-green-500" />
            </div>
            <div className="text-3xl font-bold text-green-500 mb-1">$2.5M+</div>
            <p className="text-sm text-muted-foreground">Total Volume</p>
          </div>
          <div className="bg-card/50 backdrop-blur-sm border rounded-lg p-6 text-center">
            <div className="flex items-center justify-center mb-3">
              <Award className="w-8 h-8 text-yellow-500" />
            </div>
            <div className="text-3xl font-bold text-yellow-500 mb-1">50,000+</div>
            <p className="text-sm text-muted-foreground">Battles Completed</p>
          </div>
          <div className="bg-card/50 backdrop-blur-sm border rounded-lg p-6 text-center">
            <div className="flex items-center justify-center mb-3">
              <Zap className="w-8 h-8 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-blue-500 mb-1">5,000+</div>
            <p className="text-sm text-muted-foreground">NFT Assets</p>
          </div>
        </div>

        {/* Professional CTA Section */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold"
              onClick={() => onNavigate("dashboard")}
            >
              Connect Wallet & Start Playing
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10 px-8 py-4 text-lg bg-transparent"
              onClick={() => onNavigate("arena")}
            >
              Enter Practice Arena
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="text-muted-foreground hover:text-foreground px-8 py-4 text-lg"
              onClick={() => onNavigate("marketplace")}
            >
              Explore Marketplace
            </Button>
          </div>
        </div>

        {/* Value Propositions */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center p-8 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Sword className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Skill-Based Competition</h3>
            <p className="text-muted-foreground leading-relaxed">
              Master advanced combat mechanics in a fair, competitive environment where skill determines success.
            </p>
          </div>
          <div className="text-center p-8 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50">
            <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Coins className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Strategic Investment</h3>
            <p className="text-muted-foreground leading-relaxed">
              Stake MONAD tokens in competitive matches and earn rewards based on your performance and strategy.
            </p>
          </div>
          <div className="text-center p-8 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50">
            <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold mb-4">True Asset Ownership</h3>
            <p className="text-muted-foreground leading-relaxed">
              Own your progress, trade valuable accounts, and collect unique NFT assets with cross-platform utility.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
