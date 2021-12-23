import {
  Text,
  Box,
  Flex,
  Image,
  ListItem,
  UnorderedList,
  HStack,
} from '@chakra-ui/react';
import Link from './Link';
import SocialIcons from './SocialIcons';

export default function Footer(): JSX.Element {
  return (
    <Box as="footer" className="footer-section global-footer">
      <Flex className="footer-wrap">
        <Box className="footer-data">
          <Box className="footer-logo">
            <Link className="is-image" href="/">
              <Image src="/images/bankless-logo-cn.png" alt="Bankless DAO logo" />
            </Link>
          </Box>
          <Text className="footer-description">
            Bankless是一个去中心化自治组织，旨在作为无银行运动的代表，促使未来世界向着更大的自由迈进。
          </Text>
          <Box className="footer-icons">
            <SocialIcons />
          </Box>
        </Box>
        <HStack spacing={16} wrap="wrap">
          <UnorderedList className="footer-links" mx="0">
            <ListItem className="footer-link">
              <Link href="https://discord.gg/bjPz2w9Zts">Discord</Link>
            </ListItem>
            <ListItem className="footer-link">
              <Link href="/multisig">
                BANK
              </Link>
            </ListItem>
            <ListItem className="footer-link">
              <Link href="https://www.notion.so/BanklessDAO-Wiki-82ba81e7da1c42adb7c4ab67a4f22e8f">
                Wiki
              </Link>
            </ListItem>
            <ListItem className="footer-link">
              <Link href="https://forum.bankless.community/">Forum</Link>
            </ListItem>
            <ListItem className="footer-link">
              <Link href="https://snapshot.org/#/banklessvault.eth">
                Vote
              </Link>
            </ListItem>
            
          </UnorderedList>
          <UnorderedList className="footer-links" mx="0">
            <ListItem className="footer-link">
              <Link href="https://linktr.ee/BanklessCN">
                办公
              </Link>
            </ListItem>
            <ListItem className="footer-link">
              <Link href="https://weibo.com/u/7728092945">
                微博
              </Link>
              </ListItem>
            <ListItem className="footer-link">
              <Link href="https://mp.weixin.qq.com/s/zY4Pvhp50_JLv5wlPhXqmw">
                微信公众号
              </Link>
            </ListItem>
            <ListItem className="footer-link">
              <Link href="https://twitter.com/BanklessCN">
                推特
              </Link>
            </ListItem>
            <ListItem className="footer-link">
              <Link href="https://0xbanklesscn.substack.com/">
               substack主站
              </Link>
            </ListItem>
            <ListItem className="footer-link">
              <Link href="https://space.bilibili.com/16384942">
               B站
              </Link>
            </ListItem>
          </UnorderedList>
        </HStack>
      </Flex>
      <Box className="footer-copyright">
        BanklessCN &copy; 2021. 版权所有. 发布依赖{' '}
        <Link href="https://ghost.org" target="_blank">
          Ghost
        </Link>
        {' '}以及{' '}
        <Link href="https://www.bankless.community/" target="_blank">
          Bankless总部
        </Link>
        .
      </Box>
    </Box>
  );
}
