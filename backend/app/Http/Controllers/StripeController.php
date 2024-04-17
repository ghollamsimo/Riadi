<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;
use Stripe\PaymentIntent;
use Stripe\Stripe;
use Tymon\JWTAuth\Contracts\Providers\Auth;

class StripeController extends Controller
{
    public function processPayment(Request $request)
    {
        $request->validate([
            'token' => 'required',
        ]);

        Stripe::setApiKey(env('STRIPE_SECRET'));

        $amount = 1000;
        $currency = 'MAD';

        $client = Client::where('user_id' ,  \Illuminate\Support\Facades\Auth::id()  )->first();
        $paymentMethod = $this->createPaymentMethod($request->token);
        $paymentMethod->attach(['customer' => $client->id]);

        $paymentIntent = PaymentIntent::create([
            'amount' => $amount,
            'currency' => $currency,
            'client' => $client->id,
            'payment_method' => $paymentMethod->id,
            'confirmation_method' => 'manual',
            'confirm' => true,
        ]);

        $clientSecret = $paymentIntent->client_secret;

        return [
            'success' => true,
            'client_secret' => $clientSecret,
        ];
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
