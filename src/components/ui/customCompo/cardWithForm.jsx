import { useEffect, useState } from 'react'

import { Checkbox } from "@/components/ui/checkbox"

import { Slider } from "@/components/ui/slider"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


export function CardWithForm() {

  const [password, passwordGen] = useState("")
  const [length, changeLength] = useState(5)
  const [number, changeNumber] = useState(false)
  const [symbols, changeSymbols] = useState(false)

  
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  let nums = "1234567890"
  let syms = "!@#$%^&*()_+"

  useEffect(()=>{
    let pass = ""
    if(number) str+=nums
    if(symbols) str+=syms

    for(let i=1; i<=length; i++){
      let ind = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(ind)
    }

    passwordGen(pass)

  }, [length, number, symbols])

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle className='text-xl'>PassGen 🕵️‍♂️</CardTitle>
        <CardDescription>Generate super safe passwords, super fast.</CardDescription>
      </CardHeader>
      <CardContent>
          <div className="grid w-full items-center gap-4 dpa">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input 
                  id="name" 
                  placeholder="Your password"
                  value={password}
                  readOnly
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Length: {length}</Label>
                <Slider 
                  value={[length]} 
                  min={1} 
                  max={10} 
                  step={1} 
                  onValueChange={(e) => changeLength(e[0])} 
                />
              </div>
              <div className="flex justify-evenly mt-2">
                <div>
                  <Checkbox 
                  className="mr-2" 
                  checked={number} 
                  onCheckedChange = {() => {
                      changeNumber((prev) => !prev)
                    }
                  }/>
                  <Label htmlFor="name">Numbers</Label>
                </div>
               
                <div>
                  <Checkbox 
                  className="mr-2" 
                  checked={symbols} 
                  onCheckedChange = {() => {
                      changeSymbols((prev) => !prev)
                    }
                  }
                  />
                  <Label htmlFor="name">Symbols</Label>
                </div>
              </div>
              
          </div>
      </CardContent>
    </Card>
  )
}
