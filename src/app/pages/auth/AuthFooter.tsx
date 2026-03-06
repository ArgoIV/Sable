import { Box, Text } from 'folds';
import * as css from './styles.css';

export function AuthFooter() {
  return (
    <Box className={css.AuthFooter} justifyContent="Center" gap="400" wrap="Wrap">
      <Text as="a" size="T300" href="https://app.sable.moe" target="_blank" rel="noreferrer">
        About
      </Text>
      <Text
        as="a"
        size="T300"
        href="https://github.com/7w1/sable/"
        target="_blank"
        rel="noreferrer"
      >
        {`v${APP_VERSION}${IS_RELEASE_TAG ? '' : '-dev'}`}
        {!IS_RELEASE_TAG && BUILD_HASH && (
          <>
            {' ('}
            {BUILD_REPO ? (
              <a
                href={`https://github.com/${BUILD_REPO}/commit/${BUILD_HASH}`}
                target="_blank"
                rel="noreferrer"
              >
                {BUILD_HASH}
              </a>
            ) : (
              BUILD_HASH
            )}
            )
          </>
        )}
      </Text>
      <Text as="a" size="T300" href="https://matrix.org" target="_blank" rel="noreferrer">
        Powered by Matrix
      </Text>
    </Box>
  );
}
