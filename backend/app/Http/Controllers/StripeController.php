<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Stripe\PaymentIntent;
use Stripe\Stripe;

class StripeController extends Controller
{
    public function processPayment(Request $request){
        $request->validate([
            'token' => 'required',
        ]);
        Stripe::setApiKey(env('STRIPE_SECRET'));
        $customer = \Stripe\Customer::create();
        $paymentMethod = $this->createPaymentMethod($request->token);
        $paymentMethod->attach(['customer' => $customer->id]);
        $paymentIntent = PaymentIntent::create([
            'amount' => 1000,
            'currency' => 'USD|MAD|EURRO',
            'customer' => $customer->id,
            'payment_method' => $paymentMethod->id,
            'confirmation_method' => 'manual',
            'confirm' => true,
        ]);
        $clientSecret = $paymentIntent->client_secret;
        return response()->json(['client_secret' => $clientSecret]);
    }

    private function createPaymentMethod($token)
    {
        return \Stripe\PaymentMethod::create([
            'type' => 'card',
            'card' => [
                'token' => $token,
            ],
        ]);
    }

}
