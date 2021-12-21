import { Heading, Box, Flex, Input, Button, chakra } from '@chakra-ui/react';
import { ChangeEvent, FormEvent, useState } from 'react';

export interface AlertMessages {
  [loading: string]: string;
  success: string;
  error: string;
}

export const ALERT_MESSAGES: AlertMessages = {
  loading: '处理你的请求中，需要科学上网',
  success: '不错哦，请自行打开链接 https://0xbanklesscn.substack.com/p/coming-soon',
  error: '网络有问题，没办法发出去',
} as const;

const AlertBox = chakra(Box, {
  baseStyle: {
    fontFamily: 'mono',
    fontSize: '12px',
    lineHeight: 1.1,
    position: 'absolute',
    right: 0,
    bottom: '-38px',
    left: '20px',
    width: '100%',
    margin: 0,
    padding: 0,
    color: 'white',
  },
});

export default function SubscribeSection() {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const url = 'https://0xbanklesscn.substack.com/p/coming-soon';

    const values = {
      email,
      emailType: `subscribe`,
      labels: [],
    };

    try {
      setMessage(`loading`);
      await fetch(url, {
        method: `POST`,
        mode: `cors`,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
    } catch (e) {
      setMessage(`error`);
    }

    setMessage(`success`);
  };

  return (
    <chakra.div className="subscribe-section">
      <Flex className="subscribe-wrap">
        <Heading as="h3">通过邮箱订阅最新的文章。</Heading>
        <chakra.form
          as="form"
          className="subscribe-form"
          onSubmit={(ev) => handleSubmit(ev)}>
          <Input
            type="email"
            placeholder="Your email address"
            aria-label="Your email address"
            value={email}
            onChange={handleChange}
            isRequired
          />
          <Button height="auto" type="submit">
            Subscribe
          </Button>
          <AlertBox>{ALERT_MESSAGES[message]}</AlertBox>
        </chakra.form>
      </Flex>
    </chakra.div>
  );
}
