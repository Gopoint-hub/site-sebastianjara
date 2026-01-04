import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Calculator, DollarSign, Calendar, Info } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function PacingCalculator() {
  const [budget, setBudget] = useState<string>("");
  const [spend, setSpend] = useState<string>("");
  const [dailyBudget, setDailyBudget] = useState<number>(0);
  const [daysRemaining, setDaysRemaining] = useState<number>(0);
  const [currentDate, setCurrentDate] = useState<string>("");
  const [currentMonth, setCurrentMonth] = useState<string>("");

  useEffect(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    
    // Get total days in current month
    const totalDaysInMonth = new Date(year, month + 1, 0).getDate();
    const today = now.getDate();
    
    // Calculate remaining days (including today if it's early, but usually pacing is for future days)
    // Standard practice: Remaining days = Total Days - Current Day
    // If we want to include today in the spend, we might adjust logic. 
    // Let's assume we want to know what to spend from TOMORROW onwards or including today if early.
    // Simple logic: Remaining days = Total Days - Today + 1 (to include today) or just Total - Today.
    // Let's use: Remaining days = Total Days - Today (assuming today's spend is partly done or we plan for rest of month)
    // Actually, for pacing, usually it's (Budget - Spend) / Remaining Days (including today).
    const remaining = totalDaysInMonth - today + 1; 
    
    setDaysRemaining(remaining);
    
    // Format date
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long' };
    setCurrentDate(now.toLocaleDateString('es-ES', options));
    setCurrentMonth(now.toLocaleDateString('es-ES', { month: 'long' }));
  }, []);

  useEffect(() => {
    const budgetNum = parseFloat(budget) || 0;
    const spendNum = parseFloat(spend) || 0;
    
    if (daysRemaining > 0) {
      const remainingBudget = Math.max(0, budgetNum - spendNum);
      const recommended = remainingBudget / daysRemaining;
      setDailyBudget(recommended);
    }
  }, [budget, spend, daysRemaining]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <Layout>
      <SEO 
        title="Calculadora de Pacing Publicitario"
        description="Calcula el gasto diario recomendado para tus campañas de Facebook y Google Ads. Evita subejecuciones y optimiza tu presupuesto mensual."
        keywords={["Calculadora Pacing", "Presupuesto Marketing", "Media Buying", "Calculadora Ads", "Gasto Diario"]}
      />
      
      <section className="py-12 md:py-20 bg-background min-h-[90vh] flex flex-col">
        <div className="container max-w-4xl mx-auto flex-1 flex flex-col justify-center">
          <div className="mb-8">
            <Link href="/herramientas">
              <Button variant="ghost" className="pl-0 hover:pl-2 transition-all text-muted-foreground hover:text-primary">
                <ArrowLeft className="mr-2 h-4 w-4" /> Volver a Herramientas
              </Button>
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-10 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Calculator className="h-8 w-8 text-primary" />
                </div>
                <h1 className="text-3xl md:text-4xl font-display font-bold">
                  Calculadora de <span className="text-primary">Pacing</span>
                </h1>
              </div>
              <p className="text-muted-foreground text-lg max-w-2xl">
                Controla tu velocidad de gasto. Ingresa tu presupuesto y lo que llevas gastado para saber exactamente cuánto invertir diariamente.
              </p>
            </div>

            <Card className="border-white/10 bg-card/50 backdrop-blur-sm shadow-2xl overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  
                  {/* Left Column: Inputs */}
                  <div className="p-8 md:p-10 space-y-8">
                    <div className="space-y-4">
                      <Label htmlFor="budget" className="text-base font-medium flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-primary" /> Presupuesto Objetivo del Mes
                      </Label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                        <Input
                          id="budget"
                          type="number"
                          placeholder="500000"
                          value={budget}
                          onChange={(e) => setBudget(e.target.value)}
                          className="h-14 pl-8 bg-background/50 border-white/10 text-lg font-mono"
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <Label htmlFor="spend" className="text-base font-medium flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" /> Gasto Acumulado a la Fecha
                      </Label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                        <Input
                          id="spend"
                          type="number"
                          placeholder="120000"
                          value={spend}
                          onChange={(e) => setSpend(e.target.value)}
                          className="h-14 pl-8 bg-background/50 border-white/10 text-lg font-mono"
                        />
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-4 text-sm text-muted-foreground border-t border-white/5">
                      <span>Hoy es: <strong className="text-foreground">{currentDate}</strong></span>
                      <span>Días restantes: <strong className="text-primary">{daysRemaining}</strong></span>
                    </div>
                  </div>

                  {/* Right Column: Result */}
                  <div className="bg-primary/10 p-8 md:p-10 flex flex-col justify-center items-center text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-50" />
                    
                    <div className="relative z-10">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-2">Gasto Diario Recomendado</h3>
                      <div className="text-5xl md:text-6xl font-bold font-mono mb-6 text-foreground tracking-tight">
                        {formatCurrency(dailyBudget)}
                      </div>
                      <p className="text-sm text-muted-foreground max-w-xs mx-auto leading-relaxed">
                        Este es el monto que deberías invertir diariamente para llegar a tu meta en <span className="capitalize text-foreground font-medium">{currentMonth}</span> sin pasarte ni quedarte corto.
                      </p>
                    </div>
                  </div>

                </div>
              </CardContent>
            </Card>

            <div className="mt-8 bg-blue-500/5 border border-blue-500/20 rounded-xl p-6 flex gap-4 items-start">
              <Info className="h-6 w-6 text-blue-400 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-blue-400 mb-1">¿Por qué es importante el Pacing?</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Llevar un control de pacing te permite evitar subejecuciones (dejar dinero en la mesa) o sobregastos accidentales (quedarte sin presupuesto a mitad de mes). Ajusta tus pujas o presupuestos diarios según esta recomendación.
                </p>
              </div>
            </div>

          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
