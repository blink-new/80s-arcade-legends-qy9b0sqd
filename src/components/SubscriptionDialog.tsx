import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { useAuth } from '../contexts/AuthContext';
import { toast } from 'react-hot-toast';
import { CreditCard, DollarSign, CheckCircle, Crown } from 'lucide-react';

interface SubscriptionDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SubscriptionDialog: React.FC<SubscriptionDialogProps> = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'paypal' | 'card'>('card');
  const [cardData, setCardData] = useState({
    number: '',
    expiry: '',
    cvv: '',
    name: ''
  });
  const { subscribe } = useAuth();

  const handlePayPalPayment = () => {
    setIsLoading(true);
    // In a real app, this would redirect to PayPal
    setTimeout(() => {
      subscribe();
      toast.success('Payment successful! Welcome to Premium!');
      onClose();
      setIsLoading(false);
    }, 2000);
  };

  const handleCardPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Basic validation
    if (!cardData.number || !cardData.expiry || !cardData.cvv || !cardData.name) {
      toast.error('Please fill in all card details');
      setIsLoading(false);
      return;
    }

    // Simulate payment processing
    setTimeout(() => {
      subscribe();
      toast.success('Payment successful! Welcome to Premium!');
      onClose();
      setIsLoading(false);
      setCardData({ number: '', expiry: '', cvv: '', name: '' });
    }, 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg bg-gradient-to-br from-purple-900 to-indigo-900 text-white border-2 border-yellow-400">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            <Crown className="w-8 h-8 inline-block mr-2" />
            Premium Subscription
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Benefits */}
          <div className="bg-green-900/30 p-4 rounded-lg border border-green-500/50">
            <h3 className="font-bold text-green-300 mb-3">Premium Benefits:</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Unlimited play time on all 500+ games</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Access to all classic arcade, Nintendo, Atari & Sega games</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Save game progress across sessions</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Full controller support</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>New games added monthly</span>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="text-center bg-black/20 p-4 rounded-lg">
            <div className="text-3xl font-bold text-yellow-400">$4.95</div>
            <div className="text-sm text-gray-300">per month</div>
          </div>

          {/* Payment Methods */}
          <Tabs value={paymentMethod} onValueChange={(value) => setPaymentMethod(value as 'paypal' | 'card')}>
            <TabsList className="grid w-full grid-cols-2 bg-black/20">
              <TabsTrigger value="card" className="data-[state=active]:bg-blue-600">
                <CreditCard className="w-4 h-4 mr-2" />
                Card
              </TabsTrigger>
              <TabsTrigger value="paypal" className="data-[state=active]:bg-blue-600">
                <DollarSign className="w-4 h-4 mr-2" />
                PayPal
              </TabsTrigger>
            </TabsList>

            <TabsContent value="card" className="space-y-4">
              <form onSubmit={handleCardPayment} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="cardName" className="text-white">Cardholder Name</Label>
                  <Input
                    id="cardName"
                    value={cardData.name}
                    onChange={(e) => setCardData({...cardData, name: e.target.value})}
                    placeholder="John Doe"
                    className="bg-black/20 border-gray-600 text-white placeholder-gray-400"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="cardNumber" className="text-white">Card Number</Label>
                  <Input
                    id="cardNumber"
                    value={cardData.number}
                    onChange={(e) => setCardData({...cardData, number: e.target.value})}
                    placeholder="1234 5678 9012 3456"
                    className="bg-black/20 border-gray-600 text-white placeholder-gray-400"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry" className="text-white">Expiry</Label>
                    <Input
                      id="expiry"
                      value={cardData.expiry}
                      onChange={(e) => setCardData({...cardData, expiry: e.target.value})}
                      placeholder="MM/YY"
                      className="bg-black/20 border-gray-600 text-white placeholder-gray-400"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv" className="text-white">CVV</Label>
                    <Input
                      id="cvv"
                      value={cardData.cvv}
                      onChange={(e) => setCardData({...cardData, cvv: e.target.value})}
                      placeholder="123"
                      className="bg-black/20 border-gray-600 text-white placeholder-gray-400"
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold"
                >
                  {isLoading ? 'Processing...' : 'Subscribe $4.95/month'}
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="paypal" className="space-y-4">
              <div className="text-center space-y-4">
                <p className="text-sm text-gray-300">
                  You'll be redirected to PayPal to complete your payment securely.
                </p>
                <Button
                  onClick={handlePayPalPayment}
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold"
                >
                  {isLoading ? 'Redirecting...' : 'Pay with PayPal'}
                </Button>
              </div>
            </TabsContent>
          </Tabs>

          <div className="text-center text-xs text-gray-400">
            <p>Secure payment processing. Cancel anytime.</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};