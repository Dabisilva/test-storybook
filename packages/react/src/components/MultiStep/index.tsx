import { Label, MultiStepContainer, Steps, Step } from './styles'

export interface MultiStepProps {
  steps: number
  currentStep: number
}

export function MultiStep({ steps, currentStep }: MultiStepProps) {
  const stepsArray = Array.from({ length: steps }, (_, i) => i + 1)

  return (
    <MultiStepContainer>
      <Label>
        Passo {currentStep} de {steps}
      </Label>
      <Steps css={{ '--steps-value': steps }}>
        {stepsArray.map((step) => (
          <Step key={step} active={currentStep >= step} />
        ))}
      </Steps>
    </MultiStepContainer>
  )
}

MultiStepContainer.displayName = 'MultiStep'
