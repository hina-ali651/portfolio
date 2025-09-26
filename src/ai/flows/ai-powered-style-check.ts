'use server';

/**
 * @fileOverview An AI-powered style check for website content.
 *
 * - aiPoweredStyleCheck - A function that analyzes website content and suggests improvements.
 * - AIPoweredStyleCheckInput - The input type for the aiPoweredStyleCheck function.
 * - AIPoweredStyleCheckOutput - The return type for the aiPoweredStyleCheck function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIPoweredStyleCheckInputSchema = z.object({
  name: z.string().describe('The name of the website owner.'),
  tagline: z.string().describe('The tagline of the website owner.'),
  aboutMe: z.string().describe('A short bio/about me section.'),
  services: z.string().describe('A list of services offered.'),
  designStyle: z.string().describe('A description of the desired design style.'),
});
export type AIPoweredStyleCheckInput = z.infer<typeof AIPoweredStyleCheckInputSchema>;

const AIPoweredStyleCheckOutputSchema = z.object({
  suggestions: z.string().describe('Suggestions to improve the website content and style.'),
});
export type AIPoweredStyleCheckOutput = z.infer<typeof AIPoweredStyleCheckOutputSchema>;

export async function aiPoweredStyleCheck(input: AIPoweredStyleCheckInput): Promise<AIPoweredStyleCheckOutput> {
  return aiPoweredStyleCheckFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiPoweredStyleCheckPrompt',
  input: {schema: AIPoweredStyleCheckInputSchema},
  output: {schema: AIPoweredStyleCheckOutputSchema},
  prompt: `You are a premium website design consultant. You will analyze the provided website content and style guidelines, and provide suggestions to improve its overall presentation, color usage, and wording to effectively communicate expertise and convey a high-end, luxury consultant vibe.

Name: {{{name}}}
Tagline: {{{tagline}}}
About Me: {{{aboutMe}}}
Services: {{{services}}}
Design Style: {{{designStyle}}}

Provide specific and actionable suggestions to enhance the website's premium presentation. Focus on areas like wording, color usage, and overall style to ensure it conveys expertise and a luxury consultant vibe.`,
});

const aiPoweredStyleCheckFlow = ai.defineFlow(
  {
    name: 'aiPoweredStyleCheckFlow',
    inputSchema: AIPoweredStyleCheckInputSchema,
    outputSchema: AIPoweredStyleCheckOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
