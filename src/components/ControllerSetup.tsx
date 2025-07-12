import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Gamepad2, Usb, CheckCircle, Zap, Settings } from 'lucide-react';
import { toast } from 'react-hot-toast';

interface ControllerSetupProps {
  isOpen: boolean;
  onClose: () => void;
}

interface GamepadInfo {
  id: string;
  index: number;
  mapping: string;
  connected: boolean;
  axes: number[];
  buttons: GamepadButton[];
  timestamp: number;
}

export const ControllerSetup: React.FC<ControllerSetupProps> = ({ isOpen, onClose }) => {
  const [connectedControllers, setConnectedControllers] = useState<GamepadInfo[]>([]);
  const [testingController, setTestingController] = useState<number | null>(null);
  const [supportedControllers] = useState([
    {
      name: 'Xbox Series X/S Controller',
      compatibility: 'Excellent',
      features: ['Wireless', 'USB-C', 'Vibration', 'Triggers'],
      image: '🎮'
    },
    {
      name: 'PlayStation 5 DualSense',
      compatibility: 'Excellent',
      features: ['Wireless', 'USB-C', 'Haptic Feedback', 'Adaptive Triggers'],
      image: '🎮'
    },
    {
      name: 'PlayStation 4 DualShock',
      compatibility: 'Good',
      features: ['Wireless', 'USB', 'Vibration', 'Touchpad'],
      image: '🎮'
    },
    {
      name: 'Xbox One Controller',
      compatibility: 'Excellent',
      features: ['Wireless', 'USB', 'Vibration', 'Impulse Triggers'],
      image: '🎮'
    },
    {
      name: 'Nintendo Switch Pro Controller',
      compatibility: 'Good',
      features: ['Wireless', 'USB-C', 'Gyroscope', 'NFC'],
      image: '🎮'
    },
    {
      name: 'Classic USB Gamepads',
      compatibility: 'Variable',
      features: ['USB', 'Basic Controls'],
      image: '🕹️'
    },
    {
      name: 'Retro Arcade Sticks',
      compatibility: 'Good',
      features: ['USB', 'Arcade Buttons', 'Joystick'],
      image: '🕹️'
    },
    {
      name: '8BitDo Controllers',
      compatibility: 'Excellent',
      features: ['Wireless', 'USB-C', 'Retro Design', 'Switch Mode'],
      image: '🎮'
    }
  ]);

  useEffect(() => {
    if (!isOpen) return;

    const updateGamepads = () => {
      const gamepads = navigator.getGamepads();
      const connected: GamepadInfo[] = [];

      for (let i = 0; i < gamepads.length; i++) {
        const gamepad = gamepads[i];
        if (gamepad) {
          connected.push({
            id: gamepad.id,
            index: gamepad.index,
            mapping: gamepad.mapping,
            connected: gamepad.connected,
            axes: Array.from(gamepad.axes),
            buttons: Array.from(gamepad.buttons),
            timestamp: gamepad.timestamp
          });
        }
      }

      setConnectedControllers(connected);
    };

    // Initial check
    updateGamepads();

    // Listen for controller connect/disconnect events
    const handleGamepadConnected = (e: GamepadEvent) => {
      console.log('Gamepad connected:', e.gamepad);
      toast.success(`Controller connected: ${e.gamepad.id}`);
      updateGamepads();
    };

    const handleGamepadDisconnected = (e: GamepadEvent) => {
      console.log('Gamepad disconnected:', e.gamepad);
      toast.error(`Controller disconnected: ${e.gamepad.id}`);
      updateGamepads();
    };

    window.addEventListener('gamepadconnected', handleGamepadConnected);
    window.addEventListener('gamepaddisconnected', handleGamepadDisconnected);

    // Polling for button states (some browsers need this)
    const pollInterval = setInterval(updateGamepads, 100);

    return () => {
      window.removeEventListener('gamepadconnected', handleGamepadConnected);
      window.removeEventListener('gamepaddisconnected', handleGamepadDisconnected);
      clearInterval(pollInterval);
    };
  }, [isOpen]);

  const testController = (index: number) => {
    setTestingController(index);
    toast.success('Press any button on your controller to test it!');
    
    setTimeout(() => {
      setTestingController(null);
    }, 5000);
  };

  const getControllerType = (id: string): string => {
    const idLower = id.toLowerCase();
    if (idLower.includes('xbox')) return 'Xbox Controller';
    if (idLower.includes('playstation') || idLower.includes('dualshock') || idLower.includes('dualsense')) return 'PlayStation Controller';
    if (idLower.includes('switch') || idLower.includes('nintendo')) return 'Nintendo Controller';
    if (idLower.includes('8bitdo')) return '8BitDo Controller';
    return 'Generic Controller';
  };

  const getCompatibilityBadge = (id: string) => {
    const type = getControllerType(id);
    if (type.includes('Xbox') || type.includes('8BitDo')) {
      return <Badge className="bg-green-500 text-white">Excellent</Badge>;
    }
    if (type.includes('PlayStation') || type.includes('Nintendo')) {
      return <Badge className="bg-blue-500 text-white">Good</Badge>;
    }
    return <Badge className="bg-yellow-500 text-black">Variable</Badge>;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full h-[90vh] bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white border-2 border-yellow-400 overflow-hidden">
        <DialogHeader className="pb-4 border-b border-gray-700">
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent flex items-center">
            <Gamepad2 className="w-8 h-8 mr-3 text-yellow-400" />
            USB Controller Setup
          </DialogTitle>
          <p className="text-gray-300 mt-2">
            Connect and configure your USB controllers, joysticks, and gamepads for the ultimate retro gaming experience!
          </p>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto space-y-6 py-4">
          {/* Connected Controllers */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Usb className="w-6 h-6 mr-2 text-green-400" />
              Connected Controllers ({connectedControllers.length})
            </h3>
            
            {connectedControllers.length === 0 ? (
              <Card className="bg-gray-800/50 border-gray-600">
                <CardContent className="p-6 text-center">
                  <Gamepad2 className="w-16 h-16 mx-auto mb-4 text-gray-500" />
                  <h4 className="text-lg font-semibold mb-2 text-white">No Controllers Detected</h4>
                  <p className="text-gray-400 mb-4">
                    Connect a USB controller or enable wireless pairing to get started.
                  </p>
                  <div className="text-sm text-blue-300">
                    <p>💡 <strong>Tips:</strong></p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Make sure your controller is properly connected via USB</li>
                      <li>For wireless controllers, ensure they're paired and connected</li>
                      <li>Try pressing a button on your controller to wake it up</li>
                      <li>Some controllers may require drivers - check manufacturer websites</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-4">
                {connectedControllers.map((controller) => (
                  <Card key={controller.index} className="bg-gray-800/50 border-gray-600">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="text-3xl">🎮</div>
                          <div>
                            <CardTitle className="text-white text-lg">
                              {getControllerType(controller.id)}
                            </CardTitle>
                            <p className="text-sm text-gray-400">
                              {controller.id.length > 50 
                                ? `${controller.id.substring(0, 50)}...` 
                                : controller.id}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {getCompatibilityBadge(controller.id)}
                          <div className="flex items-center space-x-1">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span className="text-sm text-green-400">Connected</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <p className="text-sm font-semibold text-gray-300 mb-1">Controller Info</p>
                          <div className="text-xs text-gray-400 space-y-1">
                            <p>Index: {controller.index}</p>
                            <p>Mapping: {controller.mapping || 'standard'}</p>
                            <p>Buttons: {controller.buttons.length}</p>
                            <p>Axes: {controller.axes.length}</p>
                          </div>
                        </div>
                        
                        <div>
                          <p className="text-sm font-semibold text-gray-300 mb-1">Button Status</p>
                          <div className="grid grid-cols-4 gap-1">
                            {controller.buttons.slice(0, 8).map((button, btnIndex) => (
                              <div
                                key={btnIndex}
                                className={`w-6 h-6 rounded text-xs flex items-center justify-center font-bold ${
                                  button.pressed
                                    ? 'bg-green-500 text-white'
                                    : 'bg-gray-600 text-gray-300'
                                }`}
                              >
                                {btnIndex}
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex flex-col space-y-2">
                          <Button
                            onClick={() => testController(controller.index)}
                            variant="outline"
                            size="sm"
                            className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                            disabled={testingController === controller.index}
                          >
                            <Zap className="w-4 h-4 mr-2" />
                            {testingController === controller.index ? 'Testing...' : 'Test Controller'}
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black"
                          >
                            <Settings className="w-4 h-4 mr-2" />
                            Configure
                          </Button>
                        </div>
                      </div>
                      
                      {testingController === controller.index && (
                        <div className="mt-4 p-3 bg-blue-900/30 rounded-lg border border-blue-500/50">
                          <p className="text-blue-200 text-sm">
                            🎮 <strong>Testing Mode Active!</strong> Press any button or move any stick to test your controller.
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Supported Controllers */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <CheckCircle className="w-6 h-6 mr-2 text-blue-400" />
              Supported Controllers
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {supportedControllers.map((controller, index) => (
                <Card key={index} className="bg-gray-800/30 border-gray-600 hover:border-yellow-400 transition-colors">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="text-2xl">{controller.image}</div>
                      <div>
                        <h4 className="font-semibold text-white text-sm">{controller.name}</h4>
                        <Badge 
                          className={`text-xs ${
                            controller.compatibility === 'Excellent' 
                              ? 'bg-green-500 text-white' 
                              : controller.compatibility === 'Good'
                              ? 'bg-blue-500 text-white'
                              : 'bg-yellow-500 text-black'
                          }`}
                        >
                          {controller.compatibility}
                        </Badge>
                      </div>
                    </div>
                    <div className="space-y-1">
                      {controller.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 text-green-400" />
                          <span className="text-xs text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Setup Instructions */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Settings className="w-6 h-6 mr-2 text-purple-400" />
              Setup Instructions
            </h3>
            <Card className="bg-gray-800/30 border-gray-600">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-white mb-3">🔌 USB Controllers</h4>
                    <ol className="list-decimal list-inside space-y-2 text-sm text-gray-300">
                      <li>Connect your controller via USB cable</li>
                      <li>Wait for your system to recognize the device</li>
                      <li>The controller should appear in the list above</li>
                      <li>Click "Test Controller" to verify functionality</li>
                      <li>Start playing your favorite retro games!</li>
                    </ol>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-3">📶 Wireless Controllers</h4>
                    <ol className="list-decimal list-inside space-y-2 text-sm text-gray-300">
                      <li>Enable Bluetooth on your device</li>
                      <li>Put your controller in pairing mode</li>
                      <li>Connect through your system's Bluetooth settings</li>
                      <li>Refresh this page and test the controller</li>
                      <li>Enjoy wireless retro gaming freedom!</li>
                    </ol>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-yellow-900/30 rounded-lg border border-yellow-500/50">
                  <h5 className="font-semibold text-yellow-200 mb-2">💡 Pro Tips</h5>
                  <ul className="list-disc list-inside space-y-1 text-sm text-yellow-100">
                    <li><strong>Keyboard as backup:</strong> All games support keyboard controls if controllers don't work</li>
                    <li><strong>Multiple controllers:</strong> Some games support up to 4 players simultaneously</li>
                    <li><strong>Button mapping:</strong> Most modern controllers work automatically with standard mappings</li>
                    <li><strong>Compatibility:</strong> Xbox controllers tend to have the best compatibility with web browsers</li>
                    <li><strong>Free access:</strong> Controller support is available to all users, no subscription required!</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-4 flex justify-end">
          <Button
            onClick={onClose}
            className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold"
          >
            Done
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};